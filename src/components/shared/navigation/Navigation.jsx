import {useState} from 'react';
import WidgetCart from '../widgetCart/WidgetCart';
import NavBar from './../navBar/NavBar';

const Navigation = () => {
    const [showWidgetCart, setShowWidgetCart] = useState(false);

    const openWidgetCart = () => {
        setShowWidgetCart(!showWidgetCart);
    }

    return (
        <>
            <NavBar titulo="E-shoes" action={openWidgetCart} />
            <WidgetCart show={showWidgetCart} action={openWidgetCart} />
        </>
    )
}

export default Navigation;