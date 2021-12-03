import React, { Component } from "react";
import './index.css'


class Login extends Component {

    state = {
        isSignedln: false,
    }

    changeState = () => {
        this.setState({ isSignedln: true })
    }

    onClickBtn = () => {
        setTimeout(this.changeState, 3000)
    }

    render() {
        return (
            <div className="container">
                {this.state.isSignedln ? <span className='greeting'>Hey! What's up?</span> : <button className='btn' onClick={this.onClickBtn}>Sing in</button>}
            </div>
        )
    }
}

export default Login