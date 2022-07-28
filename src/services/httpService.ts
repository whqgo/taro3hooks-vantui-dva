/*
 * @Author: whq
 * @Date: 2022-07-27 11:17:24
 * @LastEditTime: 2022-07-27 19:37:41
 * @LastEditors: whq
 * @Description: 
 * @FilePath: \pure-project-vantui\src\services\httpService.ts
 */
import Taro from '@tarojs/taro';
//网络请求拦截器
const interceptor = function (chain) {
    const requestParams = chain.requestParams
    let token = Taro.getStorageSync('TOKEN')//拿到本地缓存中存的token
    requestParams.header = {
        ...requestParams.header,
        Authorization: token //将token添加到头部
    }
    return chain.proceed(requestParams).then(res => { return res })
}

Taro.addInterceptor(interceptor)

const request = async (method, url, params) => {
    //由于post请求时习惯性query参数使用params，body参数使用data，而taro只有data参数，使用contentType作为区分，因此此处需要做一个判断
    let contentType = params?.data ? 'application/json' : 'application/x-www-form-urlencoded';
    if (params) contentType = params?.headers?.contentType || contentType;
    const option = {
        method,
        isShowLoading: false,
        url: url,
        data: params && (params?.data || params?.params),
        header: {
            'content-type': contentType,
        },
        success(res) {
            return res
        },
        error(e) {
            console.log('api', '请求接口出现问题', e);
        }
    }
    const resp = await Taro.request(option);
    return resp;//根据个人需要返回
}

export default {
    get: (url, config) => {
        return request('GET', url, config);
    },
    post: (url, config) => {
        return request('POST', url, config);
    },
    put: (url, config) => {
        return request('PUT', url, config);
    },
    delete: (url, config) => {
        return request('DELETE', url, config);
    },
    patch: (url, config) => {
        return request('PATCH', url, config);
    },
}
