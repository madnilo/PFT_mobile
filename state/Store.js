import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import authReducer from './auth/reducers'
import { assesmentReducer, tipsReducer } from './general/reducers'

export const Store = createStore(
    combineReducers({
        auth: authReducer,
        tips: tipsReducer,
        aseesment: assesmentReducer,
    }),
    applyMiddleware(thunkMiddleware)
)
