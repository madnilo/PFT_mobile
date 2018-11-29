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

const editUserReset = () => ({
    type: types.EDIT_USER_RESET
})

const getEventsStart = () => ({
    type: types.GET_EVENTS_REQUEST,
})

const getEventsFinish = (data) => ({
    type: types.GET_EVENTS_RESPONSE,
    data
})

const getWorkoutsStart = () => ({
    type: types.GET_WORKOUTS_REQUEST,
})

const getWorkoutsFinish = (data) => ({
    type: types.GET_WORKOUTS_RESPONSE,
    data
})

const getWorkoutDetailsStart = () => ({
    type: types.GET_WORKOUT_DETAILS__REQUEST,
})

const getWorkoutDetailsFinish = (data) => ({
    type: types.GET_WORKOUT_DETAILS_RESPONSE,
    data
})

const getSchedulesStart = () => ({
    type: types.GET_SCHEDULES_REQUEST,
})

const getSchedulesFinish = (data) => ({
    type: types.GET_SCHEDULES_RESPONSE,
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
    editUserReset,

    getEventsStart,
    getEventsFinish,

    getWorkoutsStart,
    getWorkoutsFinish,

    getWorkoutDetailsStart,
    getWorkoutDetailsFinish,

    getSchedulesStart,
    getSchedulesFinish,
}
