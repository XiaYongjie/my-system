import React, {Component} from "react";
import {Layout, Menu} from "antd";
import UserInfoUpdate from "../../containers/userinfoUpdateContainers"
const {Sider} = Layout;

export default class UserInfoSetting extends Component {
    render() {
        return (
            <Layout
                style={{
                margin: "30px",
                padding: "15px",
                height:"100%",
                backgroundColor: "#fff"
            }}>
                <Sider style={{
                      backgroundColor: "#fff",
                
                }}>
                    <Menu 
                        onClick={this.handleClick}
                        style={{
                        width: "200px",
                    }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline">
                        <Menu.Item key="1">
                            基本设置
                        </Menu.Item>
                        <Menu.Item key="2">
                            安全设置
                        </Menu.Item>
                        <Menu.Item key="3">
                            账号绑定
                        </Menu.Item>
                        <Menu.Item key="4">
                            消息通知
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{
                    backgroundColor: "#fff",
                
                }}>
                    <UserInfoUpdate {...this.props}/>
                </Layout>
            </Layout>
        );
    }

}