import React from 'react'
import './News.css'

function News(props) {
    return (
        <>
            <div className="container-title-section">
                <h2 className="title-section">Noticias</h2>
            </div>            
            <div className="banner-container">
                { props.data.map((item, index) => {
                    return(
                        <div key={ index } className="banner">
                            <img className="banner-img" src={item.urlImg} alt="shoe"/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default News