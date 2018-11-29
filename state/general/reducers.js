import types from './types'

const genericState = {
    loading: true,
    data: null,
    success: false,
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
            return { ...state, loading: true, success: false }
        case types.GET_USER_RESPONSE:
            return { ...state, loading: false, data: action.data, success: false }
        case types.EDIT_USER_REQUEST:
            return { ...state, loading: true, success: false }
        case types.EDIT_USER_RESPONSE:
            return { ...state, loading: false, data: action.data, success: true }
        case types.EDIT_USER_RESET:
            return { ...state, success: false }
        default:
            return state
    }
}

export const workoutsReducer = (state = genericState, action) => {
    switch (action.type) {
        case types.GET_WORKOUTS_REQUEST:
            return { loading: true, data: null }
        case types.GET_WORKOUTS_RESPONSE:
            return { loading: false, data: action.data }
        default:
            return state
    }
}

export const workoutDetailsReducer = (state = genericState, action) => {
    switch (action.type) {
        case types.GET_WORKOUT_DETAILS_REQUEST:
            return { loading: true, data: null }
        case types.GET_WORKOUT_DETAILS_RESPONSE:
            return { loading: false, data: action.data }
        default:
            return state
    }
}

export const schedulesReducer = (state = genericState, action) => {
    switch (action.type) {
        case types.GET_SCHEDULES_REQUEST:
            return { loading: true, data: null }
        case types.GET_SCHEDULES_RESPONSE:
            return { loading: false, data: action.data }
        default:
            return state
    }
}
