import './NavigationCart.css';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {useContext} from 'react';
import { Store } from './../../../store/context-data';

const  NavigatioCart = ({action}) => {

    const [data] = useContext(Store);    

    const sumCantidad = cart => {
        let precioTotal = cart.reduce((t, product) => t += (product.item.cantidad), 0);
        return precioTotal;
    }
    
    return (
        <div className="navCart" onClick={action}>
            <AiOutlineShoppingCart />
            <span>{sumCantidad(data.items)}</span>
        </div>
    )
}

export default NavigatioCart;