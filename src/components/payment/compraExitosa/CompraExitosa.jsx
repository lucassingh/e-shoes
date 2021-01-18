import  React from 'react';
import './CompraExitosa.css';

const Compra = ({idCompra}) => {

return (
        <>
            <div className="compra-container">
                <div className="img-container">
                        <img src={`/assets/banners/checked.svg`} alt="compra exitosa" width="200" height="200"/>
                        <p>La compra se realizo correctamente. Tu número de seguimiento es: {idCompra}</p>
                </div>
            </div>  
        </>   
    )
}

export default Compra;