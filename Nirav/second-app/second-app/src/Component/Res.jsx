import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const Res = () => {

    const onFinish = (data) => { console.log(data) }

    // const onFinishFailed = (error) => { console.error(error); }

    return (
        <>
            <div style={{ marginTop: '10%' }} >
                <Form
                    name='basic'
                    onFinish={onFinish}
                    autoComplete='off'
                    labelCol={{
                        span: 8
                    }}
                    wrapperCol={{
                        offset: 4,
                        span: 12
                    }}
                    initialValues={{
                        remember: true,
                    }}
                >

                    <Form.Item
                        name='Login'
                        wrapperCol={{
                            offset: 4,
                        }}
                    >
                        <h1
                            style={{ fontFamily: 'fangsong', fontSize: '40px', margin: '0' }}
                        ><u>Login</u></h1>
                    </Form.Item>

                    <Form.Item
                        // label='Username'
                        name='username'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!'
                            }
                        ]}
                    >
                        <Input placeholder='Enter Your Name...' size="large" prefix={<UserOutlined />} />
                    </Form.Item>

                    <Form.Item
                        // label='Password'
                        name='password'
                        rules={[{
                            required: true,
                            message: 'Please input your password!'
                        }]}
                    >
                        <Input.Password placeholder='Enter Your Password...' size="large" prefix={<LockOutlined />} />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName='checked'
                    >
                        <Checkbox>Remember Me</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button htmlType='submit' type='primary'>Submit</Button>
                    </Form.Item>

                </Form>
            </div>
        </>
    )
}

export default Res