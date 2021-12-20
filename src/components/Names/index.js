import React, { useEffect, useState } from "react";
import names from './names.json'
import './index.css'

const UsersNames = () => {

    const [people, setPeople] = useState(names.slice(0, 3))


    const addName = () => {
        const index = Math.floor(Math.random() * 13)
        const newPeople = [...people, names[index]]
        setPeople(newPeople)
    }

    return (
        <div className="container">
            {people.map((name) => {
                return (
                    <div className="names" key={name}>{name}</div>
                )
            })}
            <button onClick={addName}> Add random user </button>
        </div>
    )
}

export default UsersNames