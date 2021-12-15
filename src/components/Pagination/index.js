import React, { useEffect, useState } from "react";
import Button from "../ButtonsPanation";
import './index.css';

const Pagination = () => {

    const [image, setImage] = useState([])
    const [pagination, setPagination] = useState(1)

    const getImage = async () => {
        try {
            const respons = await fetch(`https://6173b59d110a7400172230d3.mockapi.io/image?page=${pagination}&limit=6`)
            const data = await respons.json()
            setImage(data)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getImage()
    }
        , [pagination])

    return (
        <div className='container'>
            {image.length ? image.map(img => {
                return (
                    <div key={img.id}>
                        <img className='img' src={img.img} width='200rem' alt='' />
                    </div>)
            }) : <span className='loader'></span>
            }
            {image.length && Button(setPagination)}
        </div>
    )
}

export default Pagination