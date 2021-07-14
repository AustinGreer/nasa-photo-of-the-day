import React from 'react'

function PhotoInfo(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <h3>{props.date}</h3>
            <p>{props.explanation}</p>
        </div>
    )
}

export default PhotoInfo
