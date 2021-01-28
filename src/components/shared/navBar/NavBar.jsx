import './NavBar.css';
import NavItem from '../navItem/NavItem';
import NavigationCart from '../navigationCart/NavigationCart';
import {Link} from 'react-router-dom';

function NavBar({titulo, action}) {
    const menuItems = [
        {
            texto: 'Home',
            ruta: '/',
        },
        {
            texto: 'Nike',
            ruta: '/nike',
        },
        {
            texto: 'Adidas',
            ruta: '/adidas',
        },
        {
            texto: 'Puma',
            ruta: '/puma',
        },
        {
            texto: 'Cart',
            ruta: '/cart',
        }
    ]

    return (
        <nav>
            <div className="container">
                <h1><Link to="/">{titulo}</Link></h1>
                <div className="container-ul">
                    <ul>
                        {
                        menuItems.map((seccion, index) => <NavItem key={index} text={seccion.texto} url={seccion.ruta} />)   
                        }
                    </ul>
                </div>               
                <NavigationCart action={action} />
            </div>
        </nav>
    )
}

export default NavBar;