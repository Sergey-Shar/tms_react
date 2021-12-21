import React, {useState, useEffect} from "react";
import List from "../ConstructorList";
import './index.css';

const Constructor = () => {

const [list, setList] = useState(false)

const onShowList = () => {
   setList(!list)
}

return(
     <div className="container">
         <button onClick={onShowList} className="btn-category">Выбрать категорию</button>
         <List list={list}/>
     </div>
 )
}

export default Constructor