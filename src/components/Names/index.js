import React,{useEffect,useState} from "react";
import names from './names.json'
import './index.css'

const NamesUsers = ({ name= names }) =>{
  

    return(
        <div>{name}</div>
    )
}

export default NamesUsers