import HttpRequest from './axios'
import config from '../config/index.js'
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro
const axios = new HttpRequest(baseUrl)
export default axios
