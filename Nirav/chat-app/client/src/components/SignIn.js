import React, { Component } from 'react'
import io from "socket.io-client";
import SimpleReactValidator from "simple-react-validator";
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const socket = io("https://digitalcms.sundance.org:3000/");


export class SignIn extends Component {

    constructor(props) {
        super(props)
        this.validator = new SimpleReactValidator({ autoForceUpdate: this });
        this.state = {
            userDetail: {
                email: '',
                password: ''
            },
            isPrivateUser: false,
            GostLoginDetail: {}
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            userDetail: {
                ...this.state.userDetail, [name]: value.trim(),
            }
        })
    }

    componentDidMount() {
        socket.on("response", (response) => {
            // console.log('----|response|------', response)
            switch (response.event) {
                case "generalUser|login":
                    if (response.error) {
                        alert(response.data.error)
                    } else {
                        this.setState({ isPrivateUser: response.data.user.isPrivateUser })
                        socket.emit("request", { event: "authentication", data: { token: response.data.token } });
                    }
                    break;

                case "authentication":
                    if (response.error) {
                        alert(response.data.error)
                    } else {
                        cookies.set("SundanceNewUser", response.data, {
                            domain: process.env.REACT_APP_COOKIE_DOMAIN,
                            path: "/",
                        });
                        if (this.state.isPrivateUser) {
                            cookies.set("privateScreeningUser", response.data, {
                                domain: process.env.REACT_APP_COOKIE_DOMAIN,
                                path: "/"
                            });
                        }
                        this.setState({ GostLoginDetail: response.data })
                        socket.emit("request", { event: "user|thirdPartyToken", data: { id: response.data.user._id, email: response.data.userData.email, redirectLink: 'https://api.eventive.org/auth/sundance/callback' } });
                    }
                    break;

                case "user|thirdPartyToken":
                    if (response.error) {
                        alert(response.data.error)
                    } else {
                        if (response.data && response.data.URL && (response.data.URL.includes('api.eventive.org'))) {
                            let auth = new URL(response.data.URL);
                            let token = auth.searchParams.get("auth");
                            token = decodeURIComponent(token)
                            window.Eventive.loginSundance({
                                userToken: token
                            })
                                .then((data) => {
                                    if (!data) {
                                        return;
                                    }
                                    cookies.set("myEventiveLoginToken", data.token, { domain: process.env.REACT_APP_COOKIE_DOMAIN, path: "/" });

                                    let userData = {
                                        userDetail: data.details,
                                        GostLoginDetail : this.state.GostLoginDetail,
                                    }
                                    this.props.history.push("/film|detail", userData);
                                    // window.open("http://localhost:3000/")  
                                    // window.open("http://localhost:3003/")  
                                })
                                .catch(err => {
                                    console.log(err, "Error");
                                });
                        }
                    }
                    break;

                default:
                    break;
            }

        })
    }


    handleSubmit = (e) => {
        e.preventDefault();

        if (this.validator.allValid()) {

            let data = {
                email: this.state.userDetail.email,
                password: this.state.userDetail.password,
            };
            socket.emit("request", { event: "generalUser|login", data: data });

        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }

    componentWillUnmount() {
        // alert("socket off");
        socket.off();
    }


    render() {

        return (
            <div className='signIn'>
                <h1>SignIn</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='email' autoComplete='off' placeholder='Enter Your Email' value={this.state.userDetail.email} onChange={this.handleChange} />
                    <span>{this.validator.message("email", this.state.userDetail.email, "required|email")}</span>

                    <input type='password' name='password' autoComplete='off' placeholder='Enter Your Password' value={this.state.userDetail.password} onChange={this.handleChange} />
                    <span>{this.validator.message("password", this.state.userDetail.password, "required")}</span>

                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default SignIn