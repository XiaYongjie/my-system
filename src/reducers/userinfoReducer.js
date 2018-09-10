
import * as types from '../action/actionType';
import {Map} from 'immutable';

const initialState = Map({
    userInfo:JSON.parse(localStorage.getItem("user_info")),

})

let UserInfoReducer = (state = initialState,actions)=>{
    switch (actions.type){
        case types.USERINFO_UPDATE:{     // 登录之后更改userId
            return state.merge({
                userInfo:actions.userinfo
            })
        }

        default:
            return state;
    }

}

export default UserInfoReducer;