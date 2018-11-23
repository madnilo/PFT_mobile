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

const editUser = (user) => (dispatch, getState) => {
    dispatch(actions.getUserStart())
    Http.put('student_data', {
        headers:{
            "Authorization": `bearer ${getState().auth.token}`
        }
    })
        .then(res => dispatch(actions.getUserFinish(res.data.data)))
}

// const editAvatar = (avatar) => (dispatch, getState) => {
//     dispatch(actions.getUserStart())
//     Http.put('student_data', {
//         headers:{
//             "Authorization": `bearer ${getState().auth.token}`
//         }
//     })
//         .then(res => dispatch(actions.getUserFinish(res.data.data)))
// }

export default {
    getAssesment,
    getTips,
    getEvents,
    getUser,
    editUser,
}
