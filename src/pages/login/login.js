import React, { Component } from "react";
import './login.less'
import { Input, Button } from "antd";
import { Link } from 'react-router-dom';
export default class OrderHome extends Component {
  onClick = () => {
    let name = this.refs.name.input.value;
    let password = this.refs.password.input.value;
    const { LoginActions} = this.props;
    console.log("props",this.props)
    LoginActions.login(name,password,(data)=>{
      console.log("data",data)
      return(
        <Link to="/home">
          
        </Link>
      )
    },(msg)=>{
      console.log("msg",msg)
    });
    
  }
  render() {
    return (<div className="login_parent">
        <div className ="login_center">
            <div className="login_item">
              <span>用户名</span>
              <Input placeholder="请输入用户名" ref="name"></Input>
            </div>
            <div className="login_item">
              <span>密码</span>
              <Input placeholder="请输入密码" ref="password"></Input>
            </div> 
            <Button  type="primary" className="login_button" onClick={this.onClick}>登陆</Button>
        </div>

    </div>);
  }
}
