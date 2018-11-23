import types from './types'

const getAssesmentStart = () => ({
    type: types.GET_ASSESMENT_REQUEST,
})

const getAssesmentFinish = (data) => ({
    type: types.GET_ASSESMENT_RESPONSE,
    data
})

const getTipsStart = () => ({
    type: types.GET_TIPS_REQUEST,
})

const getTipsFinish = (data) => ({
    type: types.GET_TIPS_RESPONSE,
    data
})

const getUserStart = () => ({
    type: types.GET_USER_REQUEST,
})

const getUserFinish = (data) => ({
    type: types.GET_USER_RESPONSE,
    data
})

const editUserStart = () => ({
    type: types.EDIT_USER_REQUEST,
})

const editUserFinish = (data) => ({
    type: types.EDIT_USER_RESPONSE,
    data
})

const editAvatarStart = () => ({
    type: types.EDIT_AVATAR_REQUEST,
})

const editAvatarFinish = (data) => ({
    type: types.EDIT_AVATAR_RESPONSE,
    data
})

const getEventsStart = () => ({
    type: types.GET_EVENTS_REQUEST,
})

const getEventsFinish = (data) => ({
    type: types.GET_EVENTS_RESPONSE,
    data
})

export default {
    getAssesmentStart,
    getAssesmentFinish,

    getTipsStart,
    getTipsFinish,

    getUserStart,
    getUserFinish,

    editUserStart,
    editUserFinish,

    editAvatarStart,
    editAvatarFinish,

    getEventsStart,
    getEventsFinish,
}
