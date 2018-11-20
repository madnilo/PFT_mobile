import types from './types'

const genericState = {
    loading: true,
    data: null,
}

export const assesmentReducer = (state = genericState, action) => {
    switch (action.type) {
        case types.GET_ASSESMENT_START:
            return { loading: true, data: null }
        case types.GET_ASSESMENT_FINISH:
            return { loading: false, data: action.data }
        default:
            return state
    }
}

export const tipsReducer = (state = genericState, action) => {
    switch (action.type) {
        case types.GET_TIPS_START:
            return { loading: true, data: null }
        case types.GET_TIPS_FINISH:
            return { loading: false, data: action.data }
        default:
            return state
    }
}

