

import * as types from '../action/actionType';
import {Map} from 'immutable';

const initialState = Map({
    isShowLoading:false,
    province:[],
    citys:[],
    town:[]
})

let AddressReducer = (state = initialState,actions)=>{
    switch (actions.type){
        case types.LOGIN:{     // 登录之后更改userId
            return state.merge({
                userId:actions.userId
            })
        }

        default:
            return state;
    }

}

export default AddressReducer;