import React from 'react';

function PhotoOfTheDay(props) {
    return (
        <div>
            {props.media === "image" ? 
                <img src={props.url} alt="NASA Img" />
                : 
                <iframe
                src={props.url}
                title="nasa video"
                frameBorder="0"
                gesture="media"
                allow="encrypted-media"
                allowFullScreen
                className="photo"
                />
            }
        </div>
    )
}

export default PhotoOfTheDay
