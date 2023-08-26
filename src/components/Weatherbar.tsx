import { getFetch } from '@/lib/http';
import { getWEB_SERVICE_WEATHER_URL, LiveResult } from '@/lib/utils';
import Image from "next/image";

async function Weatherbar({ adcode }: { adcode: string }) {

    const urlOfLives = getWEB_SERVICE_WEATHER_URL({
        city: adcode,
        extensions: 'base',
        output: 'JSON'
    })
    const res = await getFetch<LiveResult>(urlOfLives) // { cache: 'no-store' }
    console.log(res);
    
    if (!res) return null
    const data = res.lives

    return (
        <div className='md:absolute bg-transparent p-10 left-0'> {/* 废弃css: max-md:-translate-x-1/2 max-md:left-[50%] */}
            <div className='text-light-1'>
                <h3 className='text-primary text-lg font-bold tracking-wider mb-5 cursor-default'>实时天气</h3>

                {data.map((item, index) => {
                    return (
                        <div key={index} className='flex flex-col gap-3 cursor-default tracking-wider'>
                            <div className='text-gray-1 grid grid-cols-5 gap-5'>
                                <div className='col-span-3'>地区</div>
                                <div className='text-light-1 col-span-2'>{item.city}</div>
                            </div>
                            <div className='text-gray-1 grid grid-cols-5 gap-5'>
                                <p className='col-span-3'>天气</p>
                                <p className='text-light-1 col-span-2'>{item.weather}</p>
                            </div>
                            <div className='text-gray-1 grid grid-cols-5 gap-5'>
                                <div className='col-span-3 flex'>
                                    <Image src="/assets/temperature.svg" alt='humidity' width={16} height={16} className='mr-1' />
                                    <p>温度</p>
                                </div>
                                <p className='text-light-1 col-span-2 gap-5'>{`${item.temperature}°`}</p>
                            </div>
                            <div className='text-gray-1 grid grid-cols-5 gap-5'>
                                <div className='col-span-3 flex'>
                                    <Image src="/assets/winddirection.svg" alt='humidity' width={16} height={16} className='mr-1' />
                                    <p>风向</p>
                                </div>
                                <p className='text-light-1 col-span-2 gap-5'>{item.winddirection}</p>
                            </div>
                            <div className='text-gray-1 grid grid-cols-5 gap-5'>
                                <div className='col-span-3 flex'>
                                    <Image src="/assets/windpower.svg" alt='humidity' width={16} height={16} className='mr-1' />
                                    <p>风力</p>
                                </div>
                                <p className='text-light-1 col-span-2 gap-5'>{`${item.windpower}米/秒`}</p>
                            </div>
                            <div className='text-gray-1 grid grid-cols-5 gap-5'>
                                <div className='col-span-3 flex'>
                                    <Image src="/assets/humidity.svg" alt='humidity' width={16} height={16} className='mr-1' />
                                    <p>空气湿度</p>
                                </div>
                                <p className='text-light-1 col-span-2 gap-5'>{`${item.humidity}%`}</p>
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