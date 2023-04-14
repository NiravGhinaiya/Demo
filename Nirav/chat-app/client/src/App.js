import React, { Component } from 'react'
import SignIn from './components/SignIn'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import SocketData from './SocketData';
import history from "./components/history";
import Routers from "./components/Routers";

export class App extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div>
        <BrowserRouter basename="/">
          <Routers history={history} />
        </BrowserRouter>
      </div>
    )
  }
}

export default App