import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./index.css"

const Figure = () => {

    const params = useParams()
    const { id, color } = params

    return (
        <div className={`figure${id}`} style={{ background: color }}>
            {(id === '1') ? <h3>squared</h3> : <h3>circle</h3>}
        </div>
    )
}

export default Figure