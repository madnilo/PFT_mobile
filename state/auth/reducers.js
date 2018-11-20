import types from './types'

const initialSate = {
    loginLoading: false,
    authorized: false,
    token: null,
    loginErrors: null,
}

const authReducer = (state = initialSate, action) => {
    switch (action.type) {
        case types.LOGIN_STARTED:
            return { ...state, loginLoading: true, loginErrors: null, }
        case types.LOGIN_SUCCESS:
            return { ...state, loginLoading: false, authorized: true, token: action.token, loginErrors: null, }
        case types.LOGIN_FAILED:
            return { ...state, loginLoading: false, authorized: false, token: null, loginErrors: action.err}
        case types.LOGOUT:
            return { ...state, authorized: false, token: null, loginErrors: null, }
        default:
            return state
    }
}

export default authReducer
