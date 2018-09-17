// import { combineReducers } from 'redux';//不使用immutable
import {combineReducers} from 'redux-immutable';//使用immutable
import LoginReducer from './loginReducer';
import UserInfo from './userinfoReducer'
import AddressSelecter from './addressReducer'
const rootReducer = combineReducers({
    LoginReducer,
    UserInfo,
    AddressSelecter
})

export default rootReducer;
