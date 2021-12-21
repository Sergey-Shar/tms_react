import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./index.css"

const Figure = () => {

    const params = useParams()

    const [figure, setFigure] = useState('')

    useEffect(() => {
        (params.id === '1') ? setFigure('squared') : setFigure('circle')
    }, [params.id])

    return (
        <div className={figure} style={{ background: params.color }}>
            <h3>{figure}</h3>
        </div>
    )
}

export default Figure