import types from './types'

const loginStarted = () => ({
    type: types.LOGIN_STARTED,
})

const loginSuccess = (token) => ({
    type: types.LOGIN_SUCCESS,
    token,
})

const loginFailed = (err) => ({
    type: types.LOGIN_FAILED,
    err,
})

const logout = () => ({
    type: types.LOGOUT,
})

export default {
    loginStarted,
    loginSuccess,
    loginFailed,
    logout,
}
