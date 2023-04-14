import React from 'react'
import DisplayData from './DisplayData';


export default class Container extends React.Component {
    constructor() {
        super();
        this.state = {
            // count: 0
            show: false
        }
        console.log('constructor')
    }
    componentDidMount() {
        console.log('componentDidMount')
    }
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {

        const Clickbtn = () => {
            console.log('Remove Element')
            // this.setState({ count: this.state.count + 1 })
            // console.log(this.state)

            this.setState({ show: !this.state.show })
        }


        console.log('render')
        return (
            <>
                <h1>Hello, World {this.state.count}</h1>
                <button onClick={Clickbtn}>Click Me ?</button>
                {/* {Element} */}

                {
                    this.state.show ? <DisplayData /> : <h2>Data Not Fount </h2>
                }


            </>
        )
    }
}
