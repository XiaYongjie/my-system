// import { combineReducers } from 'redux';//不使用immutable
import {combineReducers} from 'redux-immutable';//使用immutable
import LoginReducer from './loginReducer';
const rootReducer = combineReducers({
    LoginReducer
})

export default rootReducer;
