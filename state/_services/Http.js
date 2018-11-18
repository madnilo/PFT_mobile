import axios  from 'axios'
import BASE_URL from '../_config/config'

export const Http = axios.create({
    baseURL: BASE_URL
})

Http.interceptors.response.use(
    (res) => {
        console.log('status ', res.status)
        console.log('data ', res.data)
        return res
    },
    (error) => {
        console.log('err ', error.response.data)
        return Promise.reject(error.response.data)
    }
)
