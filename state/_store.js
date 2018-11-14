import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import authReducer from './auth/reducers'

export const store = createStore(
    combineReducers({
        auth: authReducer,
    }),
    applyMiddleware(thunkMiddleware)
)
