import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

import './style.css'
import { getToken } from "../../library/userAuth";

const App = (props) => {
    const navigate = useNavigate();
    const {
        // actions
        handleChangeEmail,
        handleChangePassword,
        handleLogin,
        // data
        email,
        password,
        isLoading,
    } = props

    const onFinish = () => {
        handleLogin()
    };

    useEffect(() => {
        navigate("/")

        document.title = 'Login Form';
        const token = getToken();   
        if(token){
            navigate("/home")
        }

    });

    return (
        <div className='login-container'>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}

            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Email!',
                        },
                    ]}
                >
                    <Input
                        disabled={isLoading}
                        prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email"
                        onChange={handleChangeEmail}
                        value={email}
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        disabled={isLoading}
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        value={password}
                        onChange={handleChangePassword} 
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Link className="login-form-forgot" href="">
                        Forgot password
                    </Link>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" loading={isLoading}>
                        Log in
                    </Button>
                    Or <Link href="">register now!</Link>
                </Form.Item>
            </Form>
        </div>
    );
};

export default App;