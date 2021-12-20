import React, { useState, useEffect } from "react";

import Checkbox from "../ListCheckbox";

export const categories = [
  {
    title: "1_категория",
    id: 0,
  },
  {
    title: "2_категория",
    id: 1,
  },
  {
    title: "3_категория",
    id: 2,
  },
  {
    title: "4_категория",
    id: 3,
  },
  {
    title: "5_категория",
    id: 4,
  },
  {
    title: "6_категория",
    id: 5,
  },
  {
    title: "7_категория",
    id: 6,
  },
  {
    title: "8_категория",
    id: 7,
  },
  {
    title: "9_категория",
    id: 8,
  },
];


const List = ({ list, }) => {

  const [checked, setChecked] = useState(
    new Array(categories.length).fill(false)
  )

  const [total, setTotal] = useState(false)

  // const [diseblet, setDiseblet] = useState(
  //   new Array(aaa.length).fill(false)
  // )

  const onChecked = (position) => {
    const updateShecked = checked.map((item, index) =>
      index === position ? !item : item
    )
    setChecked(updateShecked)
  }

  useEffect(() => {
    const marked = []
    checked.forEach((item) => {
      if (item) { marked.push(item) }
      (marked.length > 4) ? setTotal(true) : setTotal(false)
    })
  }, [checked])

  return (
    <>
      {list && <ul className="list">
        {categories.map(({ title, id }, index) => {
          return (
            <li key={id}>
              <Checkbox value={title}
                checked={checked[index]}
                onChecked={() => onChecked(index)} />
              <label>{title}</label>
            </li>
          )
        })}
        {total && <div> Можно выбрать только пять категорий</div>}
      </ul>}
    </>
  )
}

export default List