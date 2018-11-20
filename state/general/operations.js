import actions from './actions'
import { Http } from '../_services/Http'

const getAssesment = () => (dispatch, getState) => {
    dispatch(actions.getAssesmentStart())
    Http.get('student_sheet', {
        headers: {
            "Authorization": `bearer ${getState().auth.token}`
        }
    })
        .then(res => dispatch(actions.getAssesmentFinish(res)))
}

const getTips = () => (dispatch) => {
    dispatch(actions.getTipsStart())
    Http.get('tips')
        .then(res => dispatch(actions.getTipsFinish(res.data.data)))
}

export default {
    getAssesment,
    getTips,

}
