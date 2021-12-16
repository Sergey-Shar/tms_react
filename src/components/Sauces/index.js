import React, { useState } from "react";
import './index.css'

const SAUCES = [
  {
    image: "https://app.pzzby.com/uploads/photos/jZIGfgJfBy.jpg",
    name: "Пармеджано",
    price: 0.80,
    id: 0,
  },
  {
    image: "https://app.pzzby.com/uploads/photos/LNO0Qbtn7F.jpg",
    name: "Чесночный",
    price: 0.80,
    id: 1,
  },
  {
    image: "https://app.pzzby.com/uploads/photos/7GvxxQcWms.jpg",
    name: "Терияки",
    price: 0.80,
    id: 2,
  },
  {
    image: "https://app.pzzby.com/uploads/photos/qH6e61tx6q.jpg",
    name: "Кисло-сладкий",
    price: 0.80,
    id: 3,
  },
]

const Sauces = () => {

  const [total, setTotal] = useState(0)

  const onCaunterTotalPrice = (price) => {
    setTotal(total + price)
  }

  return (
    <div>
      <button className="btn-confirm" onClick={() => console.log(total)}>Подтвердить</button>
      <div className="total"> Итого: {total} Br</div>
      <div className="sauces">
        <div className="title">Cоусы</div>
        {SAUCES.map(sauce => {
          return (
            <Sauce
              image={sauce.image}
              title={sauce.name}
              price={sauce.price}
              key={sauce.id}
              onCaunterTotalPrice={onCaunterTotalPrice}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Sauces

const Sauce = ({ image, title = 'нет названия', price = 0, onCaunterTotalPrice }) => {

  const [counter, setCounter] = useState(0)

  const onPlus = () => {
    setCounter(counter + 1)
    onCaunterTotalPrice(price)
  }

  const onMinus = () => {
    if (!counter) {
      return
    }
    setCounter(counter - 1)
    onCaunterTotalPrice(- price)
  }

  return (
    <div className="sauce">
      <img src={image} alt={title}></img>
      <h4> Cоус {title}</h4>
      <h5>{price} Br</h5>

      <div className="picker">
        <button className="btn-count" onClick={onMinus}>-</button>
        <strong className="count">{counter}</strong>
        <button className="btn-count" onClick={onPlus}>+</button>
      </div>
    </div>
  )
}