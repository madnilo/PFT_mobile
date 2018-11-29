import axios  from 'axios'
import BASE_URL from '../_config/config'
import Toast from '../../screens/_utils/Toast';

export const Http = axios.create({
    baseURL: BASE_URL
})

Http.interceptors.request.use(
    (req) => {
        console.log('request: ', req)
        return req
    }
)

Http.interceptors.response.use(
    (res) => {
        console.log('res: ', res.status)
        return res
    },
    (error) => {
        Toast.topToast(error.response.data.errors)
        console.log('res err :', error)
        return Promise.reject(error.response.data)
    }
)
