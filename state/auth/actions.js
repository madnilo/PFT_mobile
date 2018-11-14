const LOGIN_STARTED = 'LOGIN_STARTED'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAILED = 'LOGIN_FAILED'
const LOGOUT = 'LOGOUT'

const login = (user, password) => (dispatch, getState) => {
    console.log('entrou no operations')
    dispatch( LOGIN_STARTED )
    .then(() =>
        Http.post('auth_student', { user, password } )
        .then(res => res.json())
        .then(data => dispatch( loginSuccess(user, token) ))
        .catch(err => dispatch( loginFailed(err) ))
    )
}

const loginStarted = () => ({
    type: types.LOGIN_STARTED,
})

const loginSuccess = (user, token) => ({
    type: types.LOGIN_SUCCESS,
    token,
    user,
})

const loginFailed = (err) => ({
    type: types.LOGIN_FAILED,
    err,
})

const logout = () => ({
    type: types.LOGOUT,
})

export default {
    login,
    loginStarted,
    loginSuccess,
    loginFailed,
    logout,
}
