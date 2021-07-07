import React from 'react'

function Content (props) {
    const {nasaData} = props
    return (
        <>
            <h2>{nasaData.title}</h2>
            <img src={nasaData.url}></img>
            <p>{nasaData.explanation}</p>
            <h3>{!nasaData.copyright ? 'Copyright: Null' : `Copyright: ${nasaData.copyright}`}</h3>
        </>
    )
}

export default Content