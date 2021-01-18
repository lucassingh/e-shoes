import  React from 'react';
import './EmptyCart.css';

const EmptyCart = () => {

return (
        <>
            <div className="compra-container">
                <div className="img-container">
                        <img src={`/assets/banners/empty-cart.svg`} alt="compra exitosa" width="200" height="200"/>
                        <p>No tenes productos agregados al carrito</p>
                </div>
            </div>  
        </>   
    )
}

export default EmptyCart;