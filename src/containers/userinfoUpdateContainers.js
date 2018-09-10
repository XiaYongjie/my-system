import React,{Component } from 'react'

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import UserInfoUpdate from "../pages/userinfo/userInfoUpdate"
import * as UserInfoAction from "../action/userinfoAction";
class UserInfoUpdateContainers  extends Component{

    render(){
        return(<UserInfoUpdate {...this.props}/>)
    }
}

const mapStateToProps = (state) => {
    const  UserInfo  = state.get('UserInfo').toJS();
    return {
        UserInfo
    };
};

const mapDispatchToProps = (dispatch) => {
    const UserInfoActions = bindActionCreators(UserInfoAction, dispatch);
    return {
        UserInfoActions
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(UserInfoUpdateContainers);