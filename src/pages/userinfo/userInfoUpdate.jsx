import React, {Component} from "react";
import {Form, Input, Button} from 'antd';
import "./userinfoUpdate.less";
import Address from '../../containers/AddressSelecterContainers'
const FormItem = Form.Item;

class UserInfoView extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      }
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
                                        required: true,
                                        message: '请输入你的手机号!'
                                    }
                                ]
                            })(<Input/>)}

                        </FormItem>

                        <FormItem label="简介">
                            {getFieldDecorator('profile', {
                                rules: [
                                    {
                                        required: false
                                    }
                                ]
                            })(<Input.TextArea placeholder="简介" rows={4}/>)}
                        </FormItem>

                        <FormItem label="地址">
                            {getFieldDecorator('geographic', {
                                rules: [
                                    {
                                        required: true,
                                        message: ""
                                    }
                                ]
                            })(<Address/>)}
                        </FormItem>
                        <FormItem label="详细地址">
                            {getFieldDecorator('address', {
                                rules: [
                                    {
                                        required: true,
                                        message: "请输入详细地址"
                                    }
                                ]
                            })(<Input/>)}
                        </FormItem>

                        <Button htmlType="submit" type="primary"> 提交
                        
                        </Button>
                    </Form>
                </div>

            </div>

        );
    }
}

const UserInfoUpdate = Form.create()(UserInfoView);

export default UserInfoUpdate