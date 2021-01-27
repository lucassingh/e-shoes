import {useState, useContext} from 'react';
import './CardDetail.css';
import {useHistory} from 'react-router-dom';
import { Store } from './../../../store/context-data';

const CardDetail = ({item}) => {
    const history = useHistory();
    const [data, setData] = useContext(Store);
    const [qty, setQty] = useState(1);	

    const handleClickResta = () => {	
        if(qty > 1) {	
            setQty(qty - 1);	
        }
    }   

    const onAdd = () => {
        const idExistente = item.id;
        if(data.items.find(item => item.item.id === idExistente)) {            
            data.items[data.items.findIndex(item => item.item.id === idExistente)].cantidad += qty
            data.items = [...data.items]
            history.push('/cart');
        } else {            
            item.cantidad = qty;
            setData({
                ...data, 
                cantidad: data.cantidad + qty,
                items: [...data.items, {item: item, cantidad: qty}],
                precioTotal: data.precioTotal + (item.price * qty)
            });
            history.push('/cart');
        }
        history.push('/cart');        
        // alert(`Agregaste ${qty} productos al carrito`);	
    }

    return (
        <article className="product">
            <div className="foto">
                <img src={`/assets/products/${item.img}`} alt="imagen producto detalle"/>
            </div>

            <div className="info">
                <h1 className="title">{item.title}</h1>
                {
                    !!item.description && <p className="description">{item.description}</p>
                }
                <p className="price">${item.price}</p>

                <div className="qty">	
                    <button 	
                        disabled={qty === 1 ? 'disabled' : null } 	
                        onClick={handleClickResta}	
                    >	
                        -	
                    </button>	
                    <input type="text" value={qty} readOnly/>	
                    <button onClick={() => setQty(qty + 1)}>+</button>	
                </div>

                <button className="btn" onClick={onAdd}>Agregar al carrito</button>
            </div>
        </article>
    )
}

export default CardDetail;