import React, {Component} from 'react'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AddressSelect from "../common/addressSelecter"
import * as AdderssAction from "../action/AdderssAction";
class AddressSelecterContainners extends Component {

    render() {
        return (<AddressSelect {...this.props}/>)
    }
}

const mapStateToProps = (state) => {

    const AddressSelecter = state
        .get('AddressSelecter')
        .toJS();
    return {AddressSelecter};
};

const mapDispatchToProps = (dispatch) => {
    const AdderssActions = bindActionCreators(AdderssAction, dispatch);
    return {AdderssActions};
};
export default connect(mapStateToProps, mapDispatchToProps)(AddressSelecterContainners);