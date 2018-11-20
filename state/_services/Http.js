import axios  from 'axios'
import BASE_URL from '../_config/config'

export const Http = axios.create({
    baseURL: BASE_URL
})

Http.interceptors.response.use(
    (res) => {
        console.log('req status ', res.status)
        return res
    },
    (error) => {
        console.log('req err ', error.response.data)
        return Promise.reject(error.response.data)
    }
)
