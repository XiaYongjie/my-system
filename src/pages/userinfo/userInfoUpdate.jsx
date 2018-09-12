import React, {Component} from "react";
import {Form, Input, Select, AutoComplete} from 'antd';
import "./userinfoUpdate.less"
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

class UserInfoView extends Component {

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className="userinfo_update">
                <div className="userinfo_update_left">
                    <Form onSubmit={this.handleSubmit} layout="vertical" hideRequiredMark>
                        <FormItem layout="vertical" label="邮箱">
                            {getFieldDecorator('email', {
                                rules: [
                                    {
                                        type: 'email',
                                        message: '请输入真确的邮箱地址'
                                    }, {
                                        required: true,
                                        message: '请输入你的邮箱地址!'
                                    }
                                ]
                            })(<Input/>)}
                        </FormItem>

                        <FormItem layout="vertical" label="昵称">
                            {getFieldDecorator('name', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入你的昵称!'
                                    }
                                ]
                            })(<Input/>)}

                        </FormItem>

                        <FormItem layout="vertical" label="手机号">
                            {getFieldDecorator('phone', {
                                rules: [
                                    {
                                        type: 'phone',
                                        message: '请输入正确的手机号'
                                    }, {
                                        required: true,
                                        message: '请输入你的手机号!'
                                    }
                                ]
                            })(<Input/>)}

                        </FormItem>

                        <FormItem  label="简介">
                            {getFieldDecorator('profile', {
                                rules: [
                                    {
                                        required: false
                                    }
                                ]
                            })(<Input.TextArea placeholder="简介" rows={4}/>)}
                        </FormItem>

                        <FormItem label="">
                            {getFieldDecorator('geographic', {
                                rules: [
                                    {
                                        required: true,
                                        message: ""
                                    },
                                ]
                            })(<Input/>)}
                        </FormItem>
                        <FormItem label="">
                            {getFieldDecorator('address', {
                                rules: [
                                    {
                                        required: true,
                                        message: "请输入详细地址"
                                    }
                                ]
                            })
                            (<Input/>)}
                        </FormItem>
                    </Form>
                </div>

            </div>

        );
    }
}

const UserInfoUpdate = Form.create()(UserInfoView);

export default UserInfoUpdate