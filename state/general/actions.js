import types from './types'

const getAssesmentStart = () => ({
    type: types.GET_ASSESMENT_START,
})

const getAssesmentFinish = (data) => ({
    type: types.GET_ASSESMENT_FINISH,
    data
})

const getTipsStart = () => ({
    type: types.GET_TIPS_START,
})

const getTipsFinish = (data) => ({
    type: types.GET_TIPS_FINISH,
    data
})

const getUserStart = () => ({
    type: types.GET_USER_START,
})

const getUserFinish = (data) => ({
    type: types.GET_USER_FINISH,
    data
})

const editUserStart = () => ({
    type: types.EDIT_USER_START,
})

const editUserFinish = (data) => ({
    type: types.EDIT_USER_FINISH,
    data
})

const editAvatarStart = () => ({
    type: types.EDIT_AVATAR_START,
})

const editAvatarFinish = (data) => ({
    type: types.EDIT_AVATAR_FINISH,
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
}
