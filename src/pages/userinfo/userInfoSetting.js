import React, {Component} from "react";
import {Layout, Menu} from "antd";
const {Sider} = Layout;
import UserInfoUpdate from "../../containers/userinfoUpdateContainers"
export default class UserInfoSetting extends Component {
    render() {
        return (
            <Layout
                style={{
                margin: "30px",
                padding: "15px",
                backgroundColor: "#fff"
            }}>
                <Sider>
                    <Menu
                        onClick={this.handleClick}
                        style={{
                        width: 200
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
                    backgroundColor: "#fff"
                }}>
                    <UserInfoUpdate {...this.props}/>
                </Layout>
            </Layout>
        );
    }

}