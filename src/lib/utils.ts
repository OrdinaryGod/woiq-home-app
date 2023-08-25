import { KEY } from "@/constants";

/**
 * 高德查询基础返回结果
 */
export interface BaseResult {
    status: string | number
    count?: string | number
    info: string
    infocode: string
}

/**
 * 天气查询基础返回结果
 */
type WeatherGenaral = {
    province: string
    city: string
    adcode: string
    reporttime: string
}

/**
 * 实况天气数据信息
 */
interface Live extends WeatherGenaral {
    weather: string
    temperature: string
    winddirection: string
    windpower: string
    humidity: string
}

/**
 * 实时天气查询返回结果
 */
export interface LiveResult extends BaseResult {
    lives: Live[]
}


/**
 * 预报天气信息数据
 */
export interface Forecast extends WeatherGenaral {
    casts: {
        date: string
        week: string
        dayweather: string
        nightweather: string
        daytemp: string
        nighttemp: string
        daywind: string
        nightwind: string
        daypower: string
        nightpower: string
    }[]
}

/**
 * 预报天气查询返回结果
 */
export interface ForecastResult extends BaseResult {
    forecasts: Forecast[]
}



/**
 * IP定位查询的响应结果
 */
export interface IPResult extends BaseResult {
    rectangle: string
    adcode: string
    province: string
    city: string
}

/**
 * 天气查询API服务
 * @param city 城市编码    输入城市的adcode
 * @param extensions 气象类型   可选值：base/all  实况天气/预报天气
 * @param output 返回格式   可选值：JSON,XML
 * @returns 
 */
export function getWEB_SERVICE_WEATHER_URL(
    {
        city = '330106', extensions = 'base', output = 'JSON'
    }: {
        city: string, extensions?: string, output?: string
    }) {
    const URL = 'https://restapi.amap.com/v3/weather/weatherInfo';

    return `${URL}?key=${KEY}&city=${city}&extensions=${extensions}&output=${output}`;
}


/**
 * IP定位API服务
 * @param ip ip地址    需要搜索的IP地址（仅支持国内）若用户不填写IP，则取客户http之中的请求来进行定位
 * @param sig 签名   选择数字签名认证的付费用户必填
 * @returns 
 */
export function getWEB_SERVICE_IP_URL(
    {
        ip = '330106', sig = 'JSON'
    }: {
        ip: string, sig: string
    }) {
    const URL = 'https://restapi.amap.com/v3/ip'

    return `${URL}?key=${KEY}&ip=${ip}&sig=${sig}`;
}



export function numberToWeekday(n: number) {
    switch (n) {
        case 7:
            return "周日";
        case 1:
            return "周一";
        case 2:
            return "周二";
        case 3:
            return "周三";
        case 4:
            return "周四";
        case 5:
            return "周五";
        case 6:
            return "周六";
        default:
            return "无效的星期";
    }
}
