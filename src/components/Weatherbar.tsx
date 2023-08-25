import { getFetch } from '@/lib/http';
import { getWEB_SERVICE_WEATHER_URL } from '@/lib/utils';
import { LiveResult } from "@/lib/utils";
import Image from "next/image";

// export async function getServerSideProps(context: any) {
//     // 获取请求对象
//     const { req } = context;
//     // 从请求对象中获取客户端的 IP 地址
//     const clientIp = req.connection.remoteAddress;
//     // 在控制台输出 IP 地址（仅用于调试目的）
//     console.log(`客户端 IP 地址：${clientIp}`);
//     // 返回数据到页面组件
//     return {
//         props: {
//             clientIp
//         }
//     };
// }

async function Weatherbar() {

    const urlOfLives = getWEB_SERVICE_WEATHER_URL({
        city: '330106',
        extensions: 'base',
        output: 'JSON'
    })
    const res = await getFetch<LiveResult>(urlOfLives) // { cache: 'no-store' }
    // const res = {
    //     lives: [
    //         {
    //             province: '浙江',
    //             city: '西湖区',
    //             adcode: '330106',
    //             reporttime: '2023-08-23 21:32:27',
    //             weather: '多云',
    //             temperature: '28',
    //             winddirection: '东',
    //             windpower: '≤3',
    //             humidity: '77',
    //         }
    //     ]
    // }
    if (!res) return null
    const data = res.lives

    return (
        <div className='absolute bg-transparent p-10 left-0 max-md:-translate-x-1/2 max-md:left-[50%]'>
            <div className='text-light-1'>
                <h3 className='text-primary text-lg font-bold tracking-wider mb-5 cursor-default'>实时天气</h3>

                {data.map((item, index) => {
                    return (
                        <div key={index} className='flex flex-col gap-3 cursor-default tracking-wider'>
                            <div className='text-gray-1 grid grid-cols-5 gap-5'>
                                <div className='col-span-3'>城市/区</div>
                                <div className='text-light-1 col-span-2'>{item.city}</div>
                            </div>
                            <div className='text-gray-1 grid grid-cols-5 gap-5'>
                                <text className='col-span-3'>天气</text>
                                <text className='text-light-1 col-span-2'>{item.weather}</text>
                            </div>
                            <div className='text-gray-1 grid grid-cols-5 gap-5'>
                                <div className='col-span-3 flex'>
                                    <Image src="/assets/temperature.svg" alt='humidity' width={16} height={16} className='mr-1' />
                                    <p>温度</p>
                                </div>
                                <text className='text-light-1 col-span-2 gap-5'>{`${item.temperature}°`}</text>
                            </div>
                            <div className='text-gray-1 grid grid-cols-5 gap-5'>
                                <div className='col-span-3 flex'>
                                    <Image src="/assets/winddirection.svg" alt='humidity' width={16} height={16} className='mr-1' />
                                    <p>风向</p>
                                </div>
                                <text className='text-light-1 col-span-2 gap-5'>{item.winddirection}</text>
                            </div>
                            <div className='text-gray-1 grid grid-cols-5 gap-5'>
                                <div className='col-span-3 flex'>
                                    <Image src="/assets/windpower.svg" alt='humidity' width={16} height={16} className='mr-1' />
                                    <p>风力</p>
                                </div>
                                <text className='text-light-1 col-span-2 gap-5'>{`${item.windpower}米/秒`}</text>
                            </div>
                            <div className='text-gray-1 grid grid-cols-5 gap-5'>
                                <div className='col-span-3 flex'>
                                    <Image src="/assets/humidity.svg" alt='humidity' width={16} height={16} className='mr-1' />
                                    <p>空气湿度</p>
                                </div>
                                <text className='text-light-1 col-span-2 gap-5'>{`${item.humidity}%`}</text>
                            </div>
                            <div className='text-gray-3 text-xs'>
                                发布于 {item.reporttime}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Weatherbar;