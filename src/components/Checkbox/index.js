import React, { useState } from "react";

const CreateCheckbox = () => {
    const [checked, setChecked] = useState('✔️')
    const onChecked = () => {
        setChecked(checked === '✔️' ? '✖️' : '✔️')
    }

    const styles = {
        position: 'absolute',
        top: '50%',
        right: '50%',
        fontSize: '3rem'
    }
    return (
        <div onClick={onChecked} style={{ ...styles }} >{checked}</div>
    )
}

export default CreateCheckbox