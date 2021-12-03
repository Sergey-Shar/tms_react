import React, { Component } from "react";
import './index.css';

class SayHi extends Component {

    state = {
        loading: false,
        greeting: "",
    }

    showLoader = () => {
        this.setState({ loading: true })
    }

    onClinckBtn = () => {
        setTimeout(this.sayHi, 3000)
        this.showLoader()
    }

    sayHi = () => {
        this.setState({ loading: false, greeting: 'Hey, guys!' })
    }

    render() {
        return (
            <>
                {this.state.loading && <div className='loader'></div>}
                <button onClick={this.onClinckBtn} className='btn'>Say Hi !</button>
                <span className='greeting'>{this.state.greeting}</span>
            </>
        )
    }
}

export default SayHi