import { Button, Cascader, DatePicker, Form, Input, Radio, Select, TreeSelect } from 'antd'
import React from 'react'
import { UserOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';

const Test = () => {

    const onFinish = (data) => { console.log(data) }

    return (
        <>
            <div>
                <Form
                    name='form'
                    onFinish={onFinish}
                // wrapperCol={{
                //     offset: 4,
                //     span: 8
                // }}
                >
                    <Form.Item>
                        <h1 style={{ fontFamily: 'fangsong', fontSize: '40px', margin: '0' }} ><u>
                            Hello, User
                        </u></h1>
                    </Form.Item>

                    <Form.Item
                        name='name'
                        label='name'
                    >
                        <Input placeholder='Enter Your Name..' prefix={<UserOutlined />} />
                    </Form.Item>

                    <Form.Item
                        label='Gender' name='gender'
                    >
                        <Radio.Group>
                            <Radio value='male'>Male</Radio>
                            <Radio value='female'>Female</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item label='select' name='select'>
                        <Select>
                            <Select.Option value='reactjs'>React js</Select.Option>
                            <Select.Option value='java'>Java</Select.Option>
                            <Select.Option value='c++'>C++</Select.Option>
                            <Select.Option value='javascript'>JavaScript</Select.Option>
                            <Select.Option value='node'>Node</Select.Option>
                            <Select.Option value='python'>Python</Select.Option>
                            <Select.Option value='android'>Android</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label='treeselect' name='treeselect' >
                        <TreeSelect
                            treeData={[
                                {
                                    title: 'Light',
                                    value: 'light',
                                    children: [
                                        {
                                            title: 'aaaa',
                                            value: 'aaaa'
                                        },
                                        {
                                            title: 'qqqqq',
                                            value: 'qqqqq',
                                            children: [
                                                {
                                                    title: 'zzzz',
                                                    value: 'zzzz'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'pppp',
                                            value: 'pppp'
                                        },
                                    ],
                                },
                                {
                                    title: 'bbbbb',
                                    value: 'bbbbb'
                                }
                            ]}
                        />
                    </Form.Item>

                    <Form.Item label='Cascader' name='cascader' >
                        <Cascader
                            options={[
                                {
                                    value: 'aaaaa',
                                    label: 'aaaa',
                                    children: [
                                        {
                                            value: 'bbb',
                                            label: 'bbb'
                                        },
                                        {
                                            value: 'ccc',
                                            label: 'ccc'
                                        },
                                        {
                                            value: 'ddd',
                                            label: 'ddd'
                                        }
                                    ]
                                }
                            ]}
                        />
                    </Form.Item>

                    <Form.Item label='Date' name='date'>
                        <DatePicker />
                    </Form.Item>

                    <Form.Item label='textarea' name='Addres'>
                            <TextArea rows={3} />
                    </Form.Item>

                    <Form.Item>
                        <Button htmlType='submit' type='primary'>Submit</Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}

export default Test