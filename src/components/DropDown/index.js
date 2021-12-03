import React, { useState } from "react";
import './index.css';

const DropDown = () => {

    const listItem = ['✔️ Burgers', '✔️ Chips', '✔️ Pizza', '✔️ Sushi set']

    const [list, setList] = useState(false)

    const onClickBtn = () => {
        setList(!list)
    }
    
    return (
        <>
            <button className='toggle' onClick={onClickBtn}> Menu</button>
            {list && <ul className='list'>
                {listItem.map(item => {
                    return (<li key={Math.random()}>{item}</li>)
                })}
            </ul>}
        </>
    )
}

export default DropDown