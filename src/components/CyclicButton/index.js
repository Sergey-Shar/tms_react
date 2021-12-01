import React, { useState } from "react";

const CyclycBtn = () => {
    const [iconBtn, setIconBtn] = useState('🔃')
    const onClickBtn = () => {
        if (iconBtn === '🔃') {
            setIconBtn('🔁')
        } else if (iconBtn === '🔁') {
            setIconBtn('🔂')
        } else if (iconBtn === '🔂') {
            setIconBtn('🔃')
        }
    }
    const styles = {
        fontSize: '5rem',
        margin: '25% auto',
        textAlign: 'center',
        cursor: "pointer"
    }
    return <div onClick={onClickBtn} style={{...styles}}  >{iconBtn}</div>
}

export default CyclycBtn

