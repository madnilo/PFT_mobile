import axios  from 'axios'
import BASE_URL from '../_config/config'
import Toast from '../../screens/_utils/Toast';
import { Store } from '../Store'
import auth from '../auth/actions'
import NavigatorService from '../_services/Navigator'

export const Http = axios.create({
    baseURL: BASE_URL
})

Http.interceptors.request.use(
    (req) => {
        return req
    }
)

Http.interceptors.response.use(
    (res) => {
        return res
    },
    (error) => {
        Toast.topToast(error.response.data.errors)
        if(error.response.status === 401){
            NavigatorService.navigate('Login')
            Store.dispatch(auth.logout())
        }
        return Promise.reject(error.response.data)
    }
)
