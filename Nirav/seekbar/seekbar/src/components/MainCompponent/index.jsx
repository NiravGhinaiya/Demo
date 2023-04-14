import { Button, Modal, Form, Input } from 'antd';
import { useEffect, useState } from 'react';
import './style.css';

const MainCompponent = () => {


    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    }

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishLogin = (values) => {
        console.log('Success onFinishLogin:', values);
    };


    // useEffect(() => {
    //     const signUpButton = document.getElementById('signUp');
    //     const signInButton = document.getElementById('signIn');
    //     const container = document.getElementById('container');



    //     signUpButton.addEventListener('click', () => {
    //         container.classList.add("right-panel-active");
    //     });

    //     signInButton.addEventListener('click', () => {
    //         container.classList.remove("right-panel-active");
    //     });

    // }, [])

    const clickCreateAcc = () => {
        const signUpContainer = document.getElementById('signUpContainer');
        const signInContainer = document.getElementById('signInContainer');
        signUpContainer.classList.add("create-acc");
        signInContainer.classList.add("create-acc-op");
    }
    const clickLoginAcc = () => {
        const signUpContainer = document.getElementById('signUpContainer');
        const signInContainer = document.getElementById('signInContainer');
        signUpContainer.classList.remove("create-acc");
        signInContainer.classList.remove("create-acc-op");
    }

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal centered width={'768px'} onCancel={() =>  setIsModalOpen(false)} cancelButtonProps={{ style: { display: 'none' } }} okButtonProps={{ style: { display: 'none' } }} open={isModalOpen}>
            {/* <Modal  centered width={'768px'} open={isModalOpen} onCancel={() =>  setIsModalOpen(false)}> */}
                <div class="container" id="container">
                    <div class="form-container sign-up-container" id='signUpContainer'>
                        <Form
                            name="basic"
                            onFinish={onFinish}
                            autoComplete="off"
                        >
                            <div className='form-container-data form-margin'>
                                <h1>Create Account</h1>
                                <Form.Item
                                    name="username"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your username!',
                                        },
                                    ]}
                                >
                                    <Input placeholder='Username' />
                                </Form.Item>

                                <Form.Item
                                    name="moNumber"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your mobile Number!',
                                        },
                                        {
                                            pattern: /^[0-9]{10}$/,
                                            message: 'Please input your valid mobile Number!',
                                        }
                                    ]}
                                >
                                    <Input placeholder='Mobile No.' />
                                </Form.Item>

                                <Form.Item
                                    name="email"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Email!',
                                        },
                                        {
                                            pattern: /^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,3}$/,
                                            message: 'Please input Valid Email!'
                                        },
                                    ]}
                                >
                                    <Input placeholder='User Email' />
                                </Form.Item>

                                <Form.Item
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your password!',
                                        },
                                    ]}
                                >
                                    <Input.Password placeholder='Password' />
                                </Form.Item>

                                <Form.Item>
                                    <div className='form-button-content'>
                                        <Button size={'large'} type="primary" htmlType="submit">
                                            Submit
                                        </Button>
                                    </div>
                                </Form.Item>
                                <Form.Item>
                                    <div className='login-create-acc' id='loginAlready'><a href="#" onClick={clickLoginAcc}>Login ?</a></div>
                                </Form.Item>
                            </div>
                        </Form>
                    </div>
                    <div class="form-container sign-in-container" id='signInContainer'>
                        <Form
                            name="basic"
                            onFinish={onFinishLogin}
                            autoComplete="off"
                        >
                            <div className='form-container-data'>
                                <h1>Sign In</h1>
                                <Form.Item
                                    name="email"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Email!',
                                        },
                                        {
                                            pattern: /^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,3}$/,
                                            message: 'Please input Valid Email!'
                                        },
                                    ]}
                                >
                                    <Input placeholder='User Email' />
                                </Form.Item>

                                <Form.Item
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your password!',
                                        },
                                    ]}
                                >
                                    <Input.Password placeholder='Password' />
                                </Form.Item>
                                <Form.Item>
                                    <a href="#" className='forgotPass'>Forgot your password?</a>
                                </Form.Item>
                                <Form.Item>
                                    <div className='form-button-content'>
                                        <Button size={'large'} type="primary" htmlType="submit">
                                            Submit
                                        </Button>
                                    </div>
                                </Form.Item>
                                <Form.Item>
                                    <div className='login-create-acc' id='createAcc'><a href="#" onClick={clickCreateAcc}>Create Account?</a></div>
                                </Form.Item>
                            </div>
                        </Form>
                    </div>
                    <div class="overlay-container">
                        <div class="overlay">
                            <div class="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button class="ghost" id="signIn">Sign In</button>
                            </div>
                            <div class="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button class="ghost" id="signUp">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default MainCompponent