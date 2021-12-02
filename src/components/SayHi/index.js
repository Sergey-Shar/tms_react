import React from "react";
import './index.css'

class SayHi extends React.Component {
 
state = {
  loading: true,
  greeting: ''
}

    render() {
      return (
        <>
        <div className='loader' ></div> 
        <button>Say Hi </button>
        </>
      )
     
      
       
    }
  }

export default SayHi