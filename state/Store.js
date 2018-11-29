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
    workoutDetailsReducer
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
        schedules: schedulesReducer
    }),
    applyMiddleware(thunkMiddleware)
)
