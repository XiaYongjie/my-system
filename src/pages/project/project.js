import React, {Component} from "react";
import {Breadcrumb } from 'antd';
export default class Project extends Component {
    render() {
        return (
            <div>
                   <Breadcrumb style={{
                    margin: "16px 0"
                }}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        );
    }
}