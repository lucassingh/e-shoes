import React, { useState } from 'react';
import Image from './Image';
import i1 from '../../../assets/1.jpg';
import i2 from '../../../assets/2.jpg';
import i3 from '../../../assets/3.jpg';
import './Slider.css'

function Slider() {
    let sliderArray = [
        <Image src={i1}/>, 
        <Image src={i2}/>, 
        <Image src={i3}/>
    ];

    const [x, setX] = useState(0)
    const goLeft = () => {
        x === 0 ? setX(-100 * (sliderArray.length - 1)) : setX(x + 100);
    }

    const goRight = () => {
        ( x === -100 * (sliderArray.length-1)) ? setX(0) : setX(x - 100);
    }

    return (
        <div className="cont-slider">
            <div className="slider">
                {
                    sliderArray.map((item, index) => {
                        return(
                            <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
                                {item}    
                            </div>            
                        )
                    })
                }
                <button id="goLeft" onClick={ goLeft }>
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button id="goRight" onClick={ goRight }>
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>
    )
}

export default Slider;