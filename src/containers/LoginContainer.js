/**
 * Created by AndyWang on 2017/7/8.
 */
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class AppContainer extends React.Component {
    render() {
        return (
            <div />
        )
    }
}
// const mapStateToProps = (state) => {
//     const  OrderHome  = state.get('OrderHome').toJS();
//     return {
//         OrderHome
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     const OrderHomeActions = bindActionCreators(action1Creators, dispatch);
//     return {
//         OrderHomeActions
//     };
// };
// export default connect(mapStateToProps,mapDispatchToProps)(AppContainer);