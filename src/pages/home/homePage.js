import React, {Component} from "react";
import {Layout, Menu, Icon} from "antd";
import ConterntRouter from "../../router/ContentRoutes";
import { Link } from 'react-router-dom';
import "./homePage.less";
import Header from "../../common/head"
const {Footer, Sider} = Layout;
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
                    企业员工管理系统
                    </div>
                    <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                        <SubMenu
                            key="1"
                            title={
                            <div> <Icon type="user"/>
                            {
                            this.state.collapsed
                                ? ""
                                : "员工信息管理"
                        } </div>}>
                            <Menu.Item key="1">
                            <Link to="/home/project">基本信息</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/home/userInfo">
                                          信息修改
                                </Link>
                            
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="3">
                        <Link to="/home/project">
                                          deskout
                                </Link>
                        </Menu.Item>
                        <SubMenu key="sub1" title={<div> <Icon type="user"/>User </div>}>
                            <Menu.Item key="4">   <Link to="/home/project">
                                          tom
                                </Link></Menu.Item>
                            <Menu.Item key="5">   <Link to="/home/project">
                                          bill
                                </Link></Menu.Item>
                            <Menu.Item key="6">   <Link to="/home/project">
                                          alll
                                </Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<div> <Icon type="team"/>Team </div>}>
                            <Menu.Item key="7">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9">
                            <Icon type="file"/>
                            <span>File</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header className="header_parent" {...this.props}>
                        企业员工管理系统
                    </Header>
                        <ConterntRouter/>
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
