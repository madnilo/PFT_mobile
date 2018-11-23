import types from './types'

const genericState = {
    loading: true,
    data: null,
}

export const assesmentReducer = (state = genericState, action) => {
    switch (action.type) {
        case types.GET_ASSESMENT_REQUEST:
            return { loading: true, data: null }
        case types.GET_ASSESMENT_RESPONSE:
            return { loading: false, data: action.data }
        default:
            return state
    }
}

export const tipsReducer = (state = genericState, action) => {
    switch (action.type) {
        case types.GET_TIPS_REQUEST:
            return { loading: true, data: null }
        case types.GET_TIPS_RESPONSE:
            return { loading: false, data: action.data }
        default:
            return state
    }
}

export const eventsReducer = (state = genericState, action) => {
    switch (action.type) {
        case types.GET_EVENTS_REQUEST:
            return { loading: true, data: null }
        case types.GET_EVENTS_RESPONSE:
            return { loading: false, data: action.data }
        default:
            return state
    }
}

export const usersReducer = (state = genericState, action) => {
    switch (action.type) {
        case types.GET_USER_REQUEST:
            return { loading: true, data: null }
        case types.GET_USER_RESPONSE:
            return { loading: false, data: action.data }
        case types.EDIT_USER_REQUEST:
            return { loading: true, data: null }
        case types.EDIT_USER_RESPONSE:
            return { loading: false, data: action.data }
        default:
            return state
    }
}
