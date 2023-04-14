import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import SignIn from './SignIn'
import SocketData from '../SocketData'

export class Routers extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>
                <Switch >
                    <Route exact path="/" render={(props) => <SignIn {...props} />} />
                    <Route exact path="/film|detail" render={(props) => <SocketData {...props} />} />
                </Switch>
            </div>
        )
    }
}

export default Routers