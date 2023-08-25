
export function getFetch<T>(url: string, options: any = {}): Promise<T> {
    const headers: any = {};
    if (options.headers && Object.keys(options.headers).length) {
        Object.keys(options.headers).forEach((key) => {
            headers[key] = options.headers[key]
        })
    }
    // const { signal } = new AbortController()  //退出请求记忆（退出缓存）
    const defaultOptions = {
        // signal,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            ...headers
            // 可以添加其他自定义头部
        },
        ...options
        // next: { revalidate: 3600 }, //每一小时重新验证数据（高德天气API刷新策略：实况天气每小时更新多次，预报天气每天更新3次，分别在8、11、18点左右更新）
        // 可以添加其他选项，例如body
    }
    return new Promise((resolve, reject) => {
        fetch(url, defaultOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
}


export function postFetch<T>(url: string, options: any = {}): Promise<T> {
    const headers: any = {};
    if (options.headers && Object.keys(options.headers).length) {
        Object.keys(options.headers).forEach((key) => {
            headers[key] = options.headers[key]
        })
    }
    const defaultOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...headers
            // 可以添加其他自定义头部
        },
        ...options
        // 可以添加其他选项，例如body
    }
    return new Promise((resolve, reject) => {
        fetch(url, defaultOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
}


