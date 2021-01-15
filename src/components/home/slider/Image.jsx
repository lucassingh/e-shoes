import React from 'react';

function Image({ src }) {
    let imgStyles = {
        width: 100 + "%",
        height: "auto"
    }
  
    return (
        <img style={ imgStyles } src={src} alt="slider-img"/>
    )
}

export default Image;