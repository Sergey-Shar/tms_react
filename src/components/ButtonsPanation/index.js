import React from "react";

const buttons = ['1','2','3','4','5','6','7','8','9','10'];

const Button = (number) => {

    return (
        <div className='btn__container'>
            {buttons.map(item => {
                return (
                    <button type='button' className='btn' key={item} onClick={() => number(item)} >{item}</button>
                )
            })}
        </div>
        )
}

export default Button