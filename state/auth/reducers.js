import actions from './actions'

// state = {
//      user: {},
//      loginLoading: false
//      token: '12323123'
//      loginErr: null
// }

const authReducer = (state = {}, action) => {
    switch (action.type) {
        case actions.LOGIN_STARTED:
            return { user: null, loginLoading: true, token: null }
        case actions.LOGIN_SUCCESS:
            return { user: action.user, loginLoading: false, token: action.token }
        case actions.LOGIN_FAILED:
            return { user: null, loginLoading: false, token: null, loginErr: action.err }
        case actions.LOGOUT:
            return { user: null, loginLoading: null, token: null }
        default:
            return { user: null, loginLoading: null, token: null }
    }
}

export default authReducer
