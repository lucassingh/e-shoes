import {useContext} from 'react';
import './WidgetCart.css';
import { Store } from './../../../store/context-data';

const WidgetCart = ({show, action}) => {
    const [data] = useContext(Store);

    return (
        <div className={`widgetCart ${show ? 'open' : 'close'}`}>
            {
                data.items.map((item, index) => {

                return(
                    <p key={ index }>{item.title}</p>
                )
            })}
            <button onClick={action}>Cerrar widget</button>
        </div>
    )
}

export default WidgetCart;