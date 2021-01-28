import { useContext, useEffect } from 'react';
import {Store} from '../../store/context-data';
import './Cart.css';
import {Link} from 'react-router-dom';
import EmptyCart from './emptyCart/EmptyCart';

const Cart = () => {

    const [data, setData] = useContext(Store);

    const handleDeleteItem = (productId) => {        
        const productoBorrar = data.items.filter(producto => producto.item.id !== productId)
        setData({...data, items: [...productoBorrar]})
    }

    useEffect(() => {}, [data.items])

    const sumTotal = cart => {
        let precioTotal = cart.reduce((t, product) => t += (product.item.price * product.cantidad), 0).toFixed(2);
        return precioTotal;
    }
    
    return (
        <section className="cart">
            <h1>Cart</h1>

           {
                data.items.length !== 0 ?
                <div className="container-cart">
                    <div className="wrapper">
                        <ul className="container-card">
                            {
                                data.items.map((item, index) => {
                                return (
                                    <li key={ index }>
                                        
                                        <div className="cont-info">
                                            <img className="img" src={`/assets/products/${item.item.img}`} alt=""/>
                                            <div className="cont-title">
                                                <h2>{item.item.title}</h2>
                                                <p>Cantidad: {item.cantidad}</p>
                                                <p>Precio por unidad: <strong>${item.item.price}</strong></p>
                                                <p >Precio total: <strong>${item.item.price * item.cantidad}</strong></p>
                                            </div>
                                            <div className="container-icon-close">
                                                <img className="icon-close"
                                                    onClick={() => handleDeleteItem(item.item.id)}
                                                    src={`/assets/banners/close.svg`} 
                                                    width="10px" alt="close"
                                                />
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="cont-final">
                            <div className="cont-card-final">
                                <img className="icon" src={`/assets/banners/icon.svg`} alt=""/>
                                <p className="precio-total">Precio total: <strong>$ {sumTotal(data.items)}</strong></p>
                                <Link className="button-compra" to="/payment">Finalizar compra</Link>
                            </div>
                        </div>
                    </div>
                </div>: 
                <EmptyCart/>
            }
        </section>
    )
}

export default Cart;