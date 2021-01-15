import './NavigationCart.css';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {useContext} from 'react';
import { Store } from './../../../store/context-data';

const  NavigatioCart = ({action}) => {

    const [data] = useContext(Store);
    
    return (
        <div className="navCart" onClick={action}>
            <AiOutlineShoppingCart />
            <span>{data.cantidad}</span>
        </div>
    )
}

export default NavigatioCart;