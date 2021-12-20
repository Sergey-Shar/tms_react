import React, { useState, useEffect } from "react";
import Checkbox from "../ListCheckbox";
import Popup from "../ConstructorPopup";


export const categories = [
  {
    title: "1_категория",
    price: 1.20,
    id: 0,
  },
  {
    title: "2_категория",
    price: 2.10,
    id: 1,
  },
  {
    title: "3_категория",
    price: 1.60,
    id: 2,
  },
  {
    title: "4_категория",
    price: 2.60,
    id: 3,
  },
  {
    title: "5_категория",
    price: 1.30,
    id: 4,
  },
  {
    title: "6_категория",
    price: 1.20,
    id: 5,
  },
  {
    title: "7_категория",
    price: 1.50,
    id: 6,
  },
  {
    title: "8_категория",
    price: 1.45,
    id: 7,
  },
  {
    title: "9_категория",
    price: 1.25,
    id: 8,
  },
];


const List = ({ list, }) => {

  const [checked, setChecked] = useState(
    new Array(categories.length).fill(false)
  )

  const [warning, setWarning] = useState(false)
  const [total, setTotal] = useState(0)

  // const [diseblet, setDiseblet] = useState(
  //   new Array(aaa.length).fill(false)
  // )

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
      (marked.length > 4) ? setWarning(true) : setWarning(false)
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
                />
                </div>
               <div className="price">{price} Br</div>
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