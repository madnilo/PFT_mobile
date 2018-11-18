import { Http } from '../_services/Http'
import action from './actions'

const login = (email, password) =>
    (dispatch) => {
        dispatch(action.loginStarted())
        Http.post('auth_student', data = { email, password })
            .then(res => dispatch(action.loginSuccess(res.data.auth_token)))
            .catch(err => dispatch(action.loginFailed(err)))
    }


const getUserData = (token) =>
    (dispatch, getState) => {
        //TODO save user data to storage
        console.log('not implemented')
    }

const logout = () => action.logout()

const clearLoginErrorMessage = () => action.logout()

export default {
    login,
    logout,
    getUserData,
    clearLoginErrorMessage,
}
