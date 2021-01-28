import {useContext, useEffect } from 'react';
import './WidgetCart.css';
import { Store } from './../../../store/context-data';
import EmptyWidget from './EmptyWidget/EmptyWidget';
import {Link} from 'react-router-dom';

const WidgetCart = ({show, action}) => {

    const [data, setData] = useContext(Store);

    useEffect(() => {}, [data.items])

    const sumTotal = cart => {
        let precioTotal = cart.reduce((t, product) => t += (product.item.price * product.cantidad), 0).toFixed(2);
        return precioTotal;
    }

    const handleDeleteItem = (productId) => {        
        const productoBorrar = data.items.filter(producto => producto.item.id !== productId)
        setData({...data, items: [...productoBorrar]})
    }

    return (
        <div className={`widgetCart ${show ? 'open' : 'close'}`}>
            <div className="button-widget" onClick={action}><img src={`/assets/banners/close.svg`} width="20px" alt="close"/></div>
            {
                data.items.length !== 0 ?
                <>
                    <ul className="container-card-widget">
                        {
                            data.items.map((item, index) => {
                            return (
                                <li key={ index }>
                                    <img className="img-widget" src={`/assets/products/${item.item.img}`} alt=""/>
                                    <div className="cont-info-widget">
                                        <h2>{item.item.title}</h2>
                                        <p className="p-widget-text">Cantidad: {item.cantidad}</p>
                                        <p className="p-widget-text">Precio por unidad: <strong>${item.item.price}</strong></p>
                                        <p className="p-widget-text">Precio total: <strong>${item.item.price * item.cantidad}</strong></p>
                                    </div>
                                    <div className="container-icon-close">
                                        <img className="icon-close-widget"
                                            src={`/assets/banners/close.svg`}
                                            onClick={() => handleDeleteItem(item.item.id)}
                                            width="10px" alt="close"
                                        />
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                    <div className="cont-final-widget">
                        <div className="cont-card-final-widget">
                            <img className="icon-widget" src={`/assets/banners/icon.svg`} alt=""/>
                            <p className="precio-total-widget">Precio total: <strong>$ {sumTotal(data.items)}</strong></p>
                            <Link className="button-compra-widget" to="/cart">Ver carrito</Link>
                        </div>
                    </div>
                </>
                : 
                <EmptyWidget/>                
            }            
        </div> 
    )
}

export default WidgetCart;