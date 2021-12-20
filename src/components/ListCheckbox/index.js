import React from "react";

const Checkbox = ({ title, checked, onChecked }) => {

    return (
        <>
        <input type='checkbox' value={title} checked={checked}
            onChange={onChecked}
        //disabled={diseblet[index]}
        />
         <label>{title}</label>
         </>
        )
       
}

export default Checkbox