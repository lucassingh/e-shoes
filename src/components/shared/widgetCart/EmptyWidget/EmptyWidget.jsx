import  React from 'react';
import './EmptyWidget.css';

const EmptyWidget = () => {

return (
        <>
            <div className="compra-container-widget">
                <div className="img-container-widget">
                        <img src={`/assets/banners/empty-cart.svg`} alt="compra exitosa" width="20%" height="200"/>
                        <p>No tenes productos agregados al carrito</p>
                </div>
            </div>  
        </>   
    )
}

export default EmptyWidget;