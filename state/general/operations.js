import actions from './actions'
import { Http } from '../_services/Http'

const getAssesment = () => (dispatch, getState) => {
    dispatch(actions.getAssesmentStart())
    Http.get('student_sheet', {
        headers: {
            "Authorization": `bearer ${getState().auth.token}`
        }
    })
        .then(res => dispatch(actions.getAssesmentFinish(res.data.data)))
}

const getTips = () => (dispatch) => {
    dispatch(actions.getTipsStart())
    Http.get('tips')
        .then(res => dispatch(actions.getTipsFinish(res.data.data)))
}

const getEvents = () => (dispatch) => {
    dispatch(actions.getEventsStart())
    Http.get('events')
        .then(res => dispatch(actions.getEventsFinish(res.data.data)))
}

const getUser = () => (dispatch, getState) => {
    dispatch(actions.getUserStart())
    Http.get('student_data', {
        headers:{
            "Authorization": `bearer ${getState().auth.token}`
        }
    })
        .then(res => dispatch(actions.getUserFinish(res.data.data)))
}

const editUser = (user, avatar, pwd) => (dispatch, getState) => {
    dispatch(actions.editUserStart())

    let data = new FormData()
    if(avatar)
        data.append("avatar", {uri: avatar.uri, name: 'image.jpg', type: 'multipart/form-data'})
    if(user){
        data.append("name", user.name)
        data.append("phone", user.phone)
        data.append("email", user.email)
    }
    if(pwd)
        data.append("password", pwd)

    Http.put('student_data', data, {
        headers:{
            "Authorization": `bearer ${getState().auth.token}`,
            "Content-Type": "multipart/form-data"
        },

    })
        .then(res => { console.log('deu res'); dispatch(actions.editUserFinish(res.data.data))})
        .catch(err => { console.log('deu err');} )
}

const editUserReset = () => (dispatch) => dispatch(actions.editUserReset())

const getWorkouts = () => (dispatch, getState) => {
    dispatch(actions.getWorkoutsStart())
    Http.get('my_training', {
        headers: {
            "Authorization": `bearer ${getState().auth.token}`
        }
    })
    .then(res => dispatch(actions.getWorkoutsFinish(res.data.data)))
}

const getWorkoutDetails = (id) => (dispatch, getState) => {
    dispatch(actions.getWorkoutDetailsStart())
    Http.get(`my_training_by_day/${id}`, {
        headers: {
            "Authorization": `bearer ${getState().auth.token}`
        }
    })
    .then(res => dispatch(actions.getWorkoutDetailsFinish(res.data.data)))
}

const getSchedules = () => (dispatch, getState) => {
    dispatch(actions.getSchedulesStart())
    Http.get('my_schedule', {
        headers: {
            "Authorization": `bearer ${getState().auth.token}`
        }
    })
    .then(res => dispatch(actions.getSchedulesFinish(res.data.data)))
}

export default {
    getAssesment,
    getTips,
    getEvents,
    getUser,
    editUser,
    editUserReset,
    getWorkouts,
    getWorkoutDetails,
    getSchedules,
}
