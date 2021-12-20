import React from "react";

const Checkbox = ({ title, checked, onChecked,disabled }) => {

    return (
        <>
        <input type='checkbox' value={title} checked={checked}
            onChange={onChecked}
        disabled={disabled}
        />
         <label>{title}</label>
         </>
        )
       
}

export default Checkbox