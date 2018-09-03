/**
 * Created by AndyWang on 2017/7/8.
 */
import React from 'react';
// import {connect} from 'react-redux';
// import { bindActionCreators } from 'redux';
 import Home from "../pages/home/homePage"
// import * as LoginAction from "../action/loginAction";
class HomeContainers extends React.Component {
    render() {
        return (
            <Home {...this.props} />
        )
    }
}
// const mapStateToProps = (state) => {
//     const  LoginReducer  = state.get('LoginReducer').toJS();
//     return {
//         LoginReducer
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     const LoginActions = bindActionCreators(LoginAction, dispatch);
//     return {
//         LoginActions
//     };
// };
export default HomeContainers;