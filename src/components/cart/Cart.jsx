import {useContext} from 'react';
import {Store} from '../../store/context-data';
import './Cart.css';
import {Link} from 'react-router-dom';
import EmptyCart from './emptyCart/EmptyCart';


const Cart = () => {
    const [data] = useContext(Store);

    return (
        <section className="cart">
            <h1>Cart</h1>

           {
                data.cantidad !== 0 ?
                <div className="container-cart">
                    <div className="wrapper">
                        <ul className="container-card">
                            {
                                data.items.map((item, index) => {
                                return (
                                    <li key={ index }>
                                        <img className="img" src={`/assets/products/${item.item.img}`} alt=""/>
                                        <div className="cont-info">
                                            <h2>{item.item.title}</h2>
                                            <p>Cantidad: {item.cantidad}</p>
                                            <p>Precio por unidad: <strong>${item.item.price}</strong></p>
                                            <p >Precio total: <strong>${item.item.price * item.cantidad}</strong></p>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="cont-final">
                            <div className="cont-card-final">
                                <img className="icon" src={`/assets/banners/icon.svg`} alt=""/>
                                <p className="precio-total">Precio total: <strong>$ {data.precioTotal}</strong></p>
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