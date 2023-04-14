import React, { Component } from 'react';
import '../App.css';

export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      subcount: 0,
      flag: false,
    };
  }

  componentDidMount() {
    console.log('componentDidMount')
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevState, 'prevState')

    let value = prevState.count;
    console.log(prevState.flag, 'prevState.flag')

    if (this.state.count === 0) {
      console.log('count is 0');
    } else {
      if (prevState.flag) {
        if ((value - 1) % 5 === 0) {
          console.log(this.state.subcount, 'true')
          this.setState({ subcount: this.state.subcount + 7 });
          document.getElementById('mess').innerText = `Message : Count could be devided by ${this.state.count}. So, Subcount should increase by ${this.state.subcount + 7}.`
        }
      } else {
        if ((value + 1) % 5 === 0) {
          console.log(this.state.subcount, 'false')
          this.setState({ subcount: this.state.subcount + 7 });
          document.getElementById('mess').innerText = `Message : Count could be devided by ${this.state.count}. So, Subcount should increase by ${this.state.subcount + 7}.`
        }
      }
    }
  }

  heandlerInc = () => {
    this.setState({ count: this.state.count + 1, flag: false })
  }

  heandlerDec = () => {
    this.setState({ count: this.state.count - 1, flag: true })
  }

  render() {
    return (
      <>
        <h1>Count : {this.state.count}</h1>
        <h2>Sub Count : {this.state.subcount}</h2>
        <p id='mess'></p>
        <button onClick={this.heandlerInc}>Increment [ + ]</button> &nbsp;&nbsp;&nbsp;
        <button onClick={this.heandlerDec}>Decrement [ - ]</button>
      </>
    )
  }
}
