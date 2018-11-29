import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import authReducer from './auth/reducers'
import {
    assesmentReducer,
    tipsReducer,
    eventsReducer,
    usersReducer,
    workoutsReducer,
    schedulesReducer,
    workoutDetailsReducer,
    recoverPasswordReducer
} from './general/reducers'

export const Store = createStore(
    combineReducers({
        auth: authReducer,
        tips: tipsReducer,
        assesment: assesmentReducer,
        events: eventsReducer,
        user: usersReducer,
        workouts: workoutsReducer,
        workoutDetails: workoutDetailsReducer,
        schedules: schedulesReducer,
        recoverPassword: recoverPasswordReducer,
    }),
    applyMiddleware(thunkMiddleware)
)
