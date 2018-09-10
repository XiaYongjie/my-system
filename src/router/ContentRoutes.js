import React, {Component} from 'react';

import {Layout} from 'antd';
import {Switch, Route} from 'react-router-dom';

// import './ContentRoutes.scss';

import Project from '../pages/project/project';
import UserInfo from '../pages/userinfo/userinfo';

const {Content} = Layout;

export const ROUTES_ITEMS = [
    {
        to: '/home/project',
        text: 'project',
        icon: 'Project',
        component: Project
    }, {
        to: '/home/userInfo',
        text: 'UserInfo',
        icon: 'info-circle-o',
        component: UserInfo
    }
];

const ROUTES = ROUTES_ITEMS.map(route => (<Route
    key={route.to}
    path={route.to}
    exact={route.exact}
    component={route.component}/>));

export default class ContentRoutes extends Component {

    state = {};

    render() {
        return (
            <Content className="content-routes">
                <Switch>
                    {ROUTES}
                </Switch>
            </Content>
        );
    }

}
