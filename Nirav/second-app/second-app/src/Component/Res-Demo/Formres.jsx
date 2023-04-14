import React, { useState } from 'react'
import { Button, Col, Form, Input, Radio, Row } from 'antd'

const Formres = () => {

    const [data, setData] = useState([]);

    const [form] = Form.useForm();

    const onFinish = (val) => {
        console.log(val)
        setData([...data, {...val, isSelect: false}])

        form.resetFields();   // Clear Form After Submit
    }
    console.log(data,'data data')

    return (
        <>
            <Row>
                <Col span={12} offset={6}>
                    <div style={{
                        marginTop: '6%', padding: '4% 12% 4% 12%', border: '0', borderTop: '6px solid',
                        borderRight: '1px solid', borderBottom: '6px solid', borderLeft: '1px solid', borderRadius: '50px',
                    }}>
                        <Form onFinish={onFinish} form={form} >
                            <Form.Item name='heading'>
                                <h1 style={{
                                    textAlign: 'center', fontSize: '40px', fontWeight: '500',
                                    fontFamily: 'initial', letterSpacing: '3px', margin: '0',
                                }}>
                                    <u>Registration</u>
                                </h1>
                            </Form.Item>

                            <Form.Item
                                name='fname' label='First Name'
                                rules={[{
                                    required: true,
                                    message: '* Please Enter Your First Name...'
                                }]}
                            >
                                <Input placeholder='Enter Your First Name...' />
                            </Form.Item>

                            <Form.Item
                                name='lname' label='Last Name'
                                rules={[{
                                    required: true,
                                    message: '* Please Enter Your First Name...'
                                }]}
                            >
                                <Input placeholder='Enter Your Last Name...' />
                            </Form.Item>

                            <Form.Item
                                name='email' label='Email'
                                rules={[{
                                    required: true,
                                    message: '* Please Enter Your First Name...'
                                },
                                {
                                    type: 'email',
                                    message: '* Please Enter Valid Email..!'
                                }
                                ]}
                            >
                                <Input placeholder='Enter Your Email...' />
                            </Form.Item>

                            <Form.Item
                                label='Gender' name='gender'
                                rules={[{
                                    required: true,
                                    message: '* Please Enter Your Gender.. '
                                }]}
                            >
                                <Radio.Group>
                                    <Radio value='male'>Male</Radio>
                                    <Radio value='female'>Female</Radio>
                                </Radio.Group>
                            </Form.Item>

                            <Form.Item
                                label='Mobile No.' name='mobilen'
                                rules={[{
                                    required: true,
                                    message: '* Enter Your Mobile Number'
                                }, {
                                    pattern: /^[0-9]{10}$/,
                                    message: '* Please Enter Valid Moibe Number...!'
                                }]}
                            >
                                <Input placeholder='Enter Your Monile Number...' />
                            </Form.Item>

                            <Form.Item
                                label='Password' name='password'
                                rules={[{
                                    required: true,
                                    message: '* Enter Your Password'
                                }, {
                                    pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,30}$/,
                                    // message: 'Please Valid Password...!'
                                    message: '* At least 8 characters long but 14 or more is better. ** At least one uppercase letters, lowercase letters, numbers, and symbols Required.'
                                }]}
                            >
                                <Input type='password' placeholder='Enter Your Password...' />
                            </Form.Item>

                            <Form.Item>
                                <Button size='large' htmlType='submit' type='primary' style={{ marginTop: '20px' }}>Submit</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Formres