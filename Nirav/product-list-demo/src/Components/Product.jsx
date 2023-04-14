import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import io from "socket.io-client";
import ProductList from './ProductList';
import Cookies from 'universal-cookie';

const { Header, Content } = Layout;

const cookies = new Cookies();
const socket = io("https://digitalcms.sundance.org:3000/");


const Product = () => {

    const [userDetail, setUserDetail] = useState({
        userFirstName: '',
        userLastName: '',
        userEmail: '',
        userId: '',
        userRole: ''
    })
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        var token = ''
        let particularUser = cookies.get("privateScreeningUser") || cookies.get("particularNewUser") || cookies.get("SundanceNewUser") || cookies.get("STYXKEY_sundanceUser");
        // console.log("---?", particularUser);
        // console.log("cookies.get('myEventiveLoginToken')", cookies.get('myEventiveLoginToken'));
        if (particularUser && cookies.get('myEventiveLoginToken')) {
            token = particularUser.token
                ? particularUser.token
                : "";
        } else {
            if (particularUser) {
                socket.emit("request", {
                    event: "user|thirdPartyToken", data: {
                        id: particularUser.user?._id || particularUser?.userId,
                        email: particularUser.userData.email,
                        redirectLink: 'https://api.eventive.org/auth/sundance/callback',
                    }
                });
            }
        }

        if (particularUser && token !== null && token !== "undefined" && token !== "") {
            socket.emit("request", { event: "authentication", data: { token: particularUser.token } });
        }

    }, [])

    useEffect(() => {
        socket.on("response", (response) => {
            switch (response.event) {
                case "user|thirdPartyToken":
                    if (!response.error) {
                        let auth = new URL(response.data.URL);
                        let token = auth.searchParams.get("auth");
                        token = decodeURIComponent(token)
                        window.Eventive.loginSundance({
                            userToken: token
                        })
                            .then(order => {
                                if (!order) {
                                    return;
                                }
                                cookies.set("myEventiveLoginToken", order.token, { domain: "localhost", path: "/" });
                                // socket.emit("request", { event: "user|updateEventiveDeatils", data: { email: order.details.email, id: order.id } });
                            })
                            .catch(err => {
                                console.log(err, "Error");
                            });
                        console.log('----|', response.event, '|------', response)
                    } else {
                        alert(response.data.error)
                    }
                    break;
                case "authentication":
                    if (response.error) {
                        alert(response.data.error)
                    } else {
                        const { user, userData } = response.data
                        setUserDetail({
                            userFirstName: userData.fname,
                            userLastName: userData.lname,
                            userEmail: user.email,
                            userId: user._id,
                            userRole: user.role
                        })
                        setToggle(!toggle)
                        // console.log('----|', response.event, '|------', user, userData)
                    }
                    break;
                case "user|updateEventiveDeatils":
                    if (response.error) {
                        alert(response.data.error)
                    } else {
                        console.log('----|', response.event, '|------', response)
                    }
                    break;

                default:
                    break;
            }
        })
    }, [socket])


    useEffect(() => {
        return () => socket.off();

    }, [])


    console.log('userDetail', userDetail);

    return (
        <Layout className='layout' >
            <Header style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h1 style={{
                    color: '#fff'
                }}>Logo...</h1>

                <h3 style={{
                    color: '#fff', textTransform: 'capitalize'
                }}>{toggle ? `User Login - ${userDetail.userFirstName} ${userDetail.userLastName}` : "User Not Login"}</h3>
            </Header>
            <Content style={{ backgroundColor: 'rgba(1,1,1,0.01)', height: '100%' }}>
                <ProductList />
            </Content>
        </Layout>
    )
}

export default Product