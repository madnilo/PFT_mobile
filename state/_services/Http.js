import axios  from 'axios'
import BASE_URL from '../_config/config'

export const Http = axios.create({
    baseURL: BASE_URL
})
