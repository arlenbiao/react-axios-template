import axios from '../libs/api.request.js'
export const bing = (params = {
  idx: 0,
  format: 'json'
}) => {
  return axios.request({
    url: `/bing.php`,
    method: 'GET',
    params
  })
}