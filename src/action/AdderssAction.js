import * as types from './actionType';
import * as httpUtils from '../api/httpUtils'

export let getAddress = (id, type) => {
    return dispatch => {
        let formData = {
            id:id,
            type:type
        }
        httpUtils
            .default
            .post('/addressList', formData, (data) => {
                switch (type) {
                    case 1:
                        dispatch(provinceList(data));
                        break;
                    case 2:
                        dispatch(cityList(data));
                        break;
                    case 3:
                        dispatch(townList(data));
                        break;
                }

            }, (msg) => {
                console.log("error",msg)
            })
    }
}

export let provinceList = (list) => {
    return {type: types.ADDRESS_SELECTER, provinceList: list}
}

export let cityList = (list) => {
    return {type: types.ADDRESS_SELECTER, cityList: list}
}

export let townList = (list) => {
    return {type: types.ADDRESS_SELECTER, townList: list}
}