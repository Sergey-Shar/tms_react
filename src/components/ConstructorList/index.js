import React, { useState, useEffect } from "react";
import Checkbox from "../ListCheckbox";
import Popup from "../ConstructorPopup";
import categories from './categories.json'


const List = ({ list, }) => {

  const [checked, setChecked] = useState(
    new Array(categories.length).fill(false)
  )

  const [warning, setWarning] = useState(false)
  const [total, setTotal] = useState(0)
  const [disabled, setDisabled] = useState(false)

  const getCorrectPrice = (price) => price.toFixed(2)
 
   const onChecked = (position) => {
    const updateShecked = checked.map((item, index) =>
      index === position ? !item : item
    )
    setChecked(updateShecked)

    const totalPrice = updateShecked.reduce((sum, state, index)=>{
      if(state){
        return sum + categories[index].price;
      }
      return sum
    },0
    )
    setTotal(totalPrice)
}

const onClose = () => {
  setWarning(false)
}

  useEffect(() => {
    const marked = []
    checked.forEach((item) => {
      if (item) { 
        marked.push(item)  }
      if(marked.length > 4){
        setWarning(true)
        setDisabled(true)
      } else {
        setWarning(false)
        setDisabled(false)
      }
    })
  }, [checked])

  return (
    <>
      {list && <ul className="list">
        {categories.map(({ title, id, price }, index) => {
          return (
            <li key={id}>
              <div className="flex-container">
                <div className="category">
              <Checkbox value={title}
                checked={checked[index]}
                onChecked={() => onChecked(index)}
                title={title}
                disabled={disabled && !checked[index] }
                />
                </div>
               <div className="price">{getCorrectPrice(price)} Br</div>
              </div>
            </li>
          )
        })}
        <div className="flex-container">
          <div className="total">Итого:</div>
          <div className="total-price">{total}</div>
        </div>
      </ul>}
      { warning &&  <Popup text={'Можно выбрать только пять категорий'} onClose={onClose}/>}
    </>
  )
}

export default List