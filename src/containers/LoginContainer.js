/**
 * Created by AndyWang on 2017/7/8.
 */
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from "../pages/login/login"
import * as LoginAction from "../action/loginAction";
class LoginContainer extends React.Component {
    render() {
        return (
            <Login {...this.props} />
        )
    }
}
const mapStateToProps = (state) => {
    const  LoginReducer  = state.get('LoginReducer').toJS();
    return {
        LoginReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    const LoginActions = bindActionCreators(LoginAction, dispatch);
    return {
        LoginActions
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer);