import { getFetch } from '@/lib/http';
import { getWEB_SERVICE_WEATHER_URL } from '@/lib/utils';
import { ForecastResult, numberToWeekday } from "@/lib/utils";

async function Library({ adcode }: { adcode: string }) {
    const urlOfFocst = getWEB_SERVICE_WEATHER_URL({
        city: adcode,
        extensions: 'all',
        output: 'JSON'
    })
    const res = await getFetch<ForecastResult>(urlOfFocst)
    // console.log('data1--------', res.forecasts[0].casts);
    const casts = res.forecasts[0].casts

    return (
        <section className='library'>
            <h3 className='text-primary text-base font-semibold pt-20'>预报天气</h3>

            <div className='text-light-1 p-6'>
                <p className='text-2xl font-bold tracking-widest'>未来三日天气</p>
                <p></p>
            </div>

            <div className='text-light-2 mt-5'>
                <div className='grid grid-cols-6 gap-5 text-gray-1'>
                    <div className=''>日期</div>
                    <div className=''>天气</div>
                    <div className=''>夜间温度</div>
                    <div className=''>日间温度</div>
                    <div className=''>风向</div>
                    <div className=''>风力</div>
                </div>
                <div className='flex flex-col gap-5 mt-5'>
                    {casts.map((cast, index) => {
                        return (
                            <div key={index} className='grid grid-cols-6 gap-5 text-light-1'>
                                <div className=''>{index === 0 ? '今天' : numberToWeekday(Number(cast.week))}</div>
                                <div className=''>{cast.dayweather}</div>
                                <div className=''>{`${cast.nighttemp}°`}</div>
                                <div className=''>{`${cast.daytemp}°`}</div>
                                <div className=''>{cast.daywind}</div>
                                <div className=''>{`${cast.daypower}米/秒`}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Library;