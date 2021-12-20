import React, { useEffect, useState } from "react"
import './index.css'

const TimePicker = () => {

    const [hours, setHours] = useState(0)
    const [minuts, setMinuts] = useState(0)

    useEffect(() => {
        if (hours < 0) {
            setHours(23)
        } if (hours > 23) {
            setHours(0)
        }
    }, [hours])

    useEffect(() => {
        if (minuts < 0) {
            setMinuts(59)
            setHours(hours - 1)
        } if (minuts > 59) {
            setMinuts(0)
            setHours(hours + 1)
        }
    }, [minuts])

    return (
        <div className="container">
            <div className="hours">
                {(hours < 10) ? <span >{`0${hours}`}</span> : <span >{hours}</span>}
                <div className="btn">
                    <button onClick={() => setHours(hours - 1)}>-</button>
                    <button onClick={() => setHours(hours + 1)}>+</button>
                </div>
            </div>
            <div className="minuts">
                {(minuts < 10) ? <span >{`0${minuts}`}</span> : <span >{minuts}</span>}
                <div className="btn">
                    <button onClick={() => setMinuts(minuts - 1)}>-</button>
                    <button onClick={() => setMinuts(minuts + 1)}>+</button>
                </div>
            </div>
        </div>
    )
}

export default TimePicker