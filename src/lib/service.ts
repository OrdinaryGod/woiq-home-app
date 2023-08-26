import { getFetch } from '@/lib/http';
import { getWEB_SERVICE_CITY_DISTRICT_URL, getWEB_SERVICE_IP_URL, IPResult, DistrictResult } from '@/lib/utils';
import { testIpv4 } from "@/lib/utils";

/**
 * 根据ip获取城市 adcode
 * @param ip ip地址（ipv4）
 * @returns 
 */
export async function getLocalAdcode(ip: string): Promise<string> {
    if (!testIpv4(ip)) return '110000';  //失败就返回北京的adcode
    const url = getWEB_SERVICE_IP_URL({ ip })
    const res = await getFetch<IPResult>(url)
    console.log(res);
    if (res.status === '0') return '110000'
    const adcode = getAdcodeByCityName(res.city)

    return adcode
}

/**
 * 根据城市名称获取城市 adcode
 * @param cityName 城市名称
 * @returns adcode string
 */
async function getAdcodeByCityName(cityName: string): Promise<string> {
    const url = getWEB_SERVICE_CITY_DISTRICT_URL({ cityName })
    const res = await getFetch<DistrictResult>(url)
    // console.log(res);
    if (res.status === '0') return '110000'
    const data = res.districts.filter(element => element.name === cityName)
    return data.length ? data[0].adcode : '110000'
}