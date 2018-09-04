import React, {Component} from "react";
import {Layout, Menu, Breadcrumb, Icon, Avatar} from "antd";
import "./homePage.less";
const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;

export default class HomePage extends Component {

    constructor() {
        super();
        this.state = {
            collapsed: false
        };
    }

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({collapsed});
    };

    render() {
        return (
            <Layout className="home_page">
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}>
                    <div className="head_parent">
                        <Avatar size={this.state.collapsed ? 32: 64} icon="user"/>F
                    </div>
                    <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                        <SubMenu key="1"
                            title={<span><Icon type="user"/>{this.state.collapsed ? "":"员工信息管理" } </span>}>
                            <Menu.Item key="3">基本信息</Menu.Item>
                            <Menu.Item key="4">信息修改</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="2">
                            <Icon type="desktop"/>
                            <span>Option 2</span>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={<span> <Icon type="user"/>User </span>}>
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={<span> <Icon type="team"/> Team </span> }>
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9">
                            <Icon type="file"/>
                            <span>File</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header className="header_parent">
                    企业员工管理系统
                    </Header>
                    <Content
                        style={{
                        margin: "0 16px"
                    }}>
                        <Breadcrumb
                            style={{
                            margin: "16px 0"
                        }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div
                            style={{
                            padding: 24,
                            background: "#fff",
                            minHeight: 360
                        }}>
                            Bill is a cat.
                        </div>
                    </Content>
                    <Footer
                        style={{
                        textAlign: "center"
                    }}>
                        Design ©2018 Created by XYJ 
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}
