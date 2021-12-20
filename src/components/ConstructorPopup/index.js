import React from "react"

const Popup = ({text, onClose}) => {
return(
    <div className='popup'>
        <div className="overlay">
            <div className="popup-body">
                <span onClick={onClose} className="btn-close">&times;</span>
                <h4>{text}</h4>
            </div>
        </div>
    </div>
)
}

export default Popup