import React, {Component} from "react";
import './head.less'
import {Avatar, Icon,Badge} from 'antd';
export default class Header extends Component {
    constructor(){
        super()
        this.state = {
            userInfo:JSON.parse(localStorage.getItem("user_info")),
        }
    }
    componentWillMount(){
        //判断用户信息是否存在，不存在去登陆
       if(this.state.userInfo){
           console.log("data",this.state.userInfo)
       }else{
           console.log("用户不存在");
           this.props
           .history
           .push("/login")
       }
    }

    
    headClick = () => {
        console.log("headClick");
    }


    render() {
        let userInfo = this.state.userInfo
        return (
            <div className="head">
                <Badge count={1} style={{marginRight:"30px"}}>
                    <Icon type="bell" className="bell_alert" theme="twoTone"/>
                    </Badge>

                <div className="user_image_parent" onClick={this.headClick}>
                    <Avatar size="small" icon="user"/>
                    <span className="user_name">{userInfo?userInfo.userName:""}</span>
                </div>
            </div>
        )
    }
}