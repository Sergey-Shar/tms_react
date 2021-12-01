import React, { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const onClickPlus = () => {
        setCounter(counter + 1)
    }
    const onClickMinus = () => {
        setCounter(counter - 1)
    }
    const styleContainer = {
        alignItems: 'center',
        margin: '25% auto',
        display: 'flex',
        justifyContent: 'space-around',
        width: '20rem'
    }
    return (
        <div style={{ ...styleContainer }}>
            <div style={{ fontSize: '3rem', cursor: 'pointer' }} onClick={onClickMinus}>➖</div>
            <span style={{ fontSize: '5rem' }} >{counter}</span>
            <div style={{ fontSize: '3rem', cursor: 'pointer' }} onClick={onClickPlus}>➕</div>
        </div>
    )
}

export default Counter