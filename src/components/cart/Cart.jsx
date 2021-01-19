import {useContext} from 'react';
import {Store} from '../../store/context-data';
import './Cart.css';
import {Link} from 'react-router-dom';
import EmptyCart from './emptyCart/EmptyCart';
import { getFirestore } from '../../db/index';

const Cart = () => {
    const [data] = useContext(Store);

    const db = getFirestore();

    const handleDeleteItem = () => {
        db.collection('products').doc().delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    }

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
                                                    onClick={handleDeleteItem}
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