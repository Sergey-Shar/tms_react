import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './index.css'

const types = [1, 2]
const colors = ['red', 'gray', 'blue', 'cyan', 'yellow', 'orange']

const Navbar = () => {

    const history = useHistory()

    const [color, setColor] = useState('black')
    const [id, setId] = useState(0)

    const onIdChange = (num) => {
        history.push(`/figure/${num}/${color}`)
        setId(num)
    }

    const onColorChange = (color) => {
        history.push(`/figure/${id}/${color}`)
        setColor(color)
    }

    return (
        <div className="container">
            <div className="type">
                {types.map((number) => {
                    return (
                        <button key={number} 
                        onClick={() => onIdChange(number)} >{number}</button>
                    )
                })}
            </div>
            <div className="color">
                {colors.map((color) => {
                    return (
                        <button key={color} 
                        onClick={() => onColorChange(color)} >{color}</button>
                    )
                })}
            </div>
        </div>
    )
}

export default Navbar