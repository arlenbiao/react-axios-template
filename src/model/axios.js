import Axios from 'axios'
import Qs from 'qs'
const axios = Axios.create()
axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.timeout = 5000; //响应时间
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; //配置请求头
axios.defaults.headers.delete['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; //配置请求头
axios.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; //配置请求头

// 当实例创建时设置默认配置
// axios.defaults.baseURL = 'http://localhost:3000';

axios.interceptors.request.use(config => {
    if (config.method === 'post') {
        config.data=Qs.stringify(config.data)
    }
    return config
})

axios.interceptors.response.use(response => {
    let data = response.data
    return data
}, (error) => {
        return Promise.reject(error)
})
export default axios
