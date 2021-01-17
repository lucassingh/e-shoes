import {useState, useContext} from 'react';
import {Store} from '../../store/context-data';
import { getFirestore } from '../../db/index';
import './Payment.css';
import  firebase from 'firebase/app';

const Payment = () => {

    const db = getFirestore();

    const [data] = useContext(Store);

    const [ venta, setVenta ] = useState(false);

    const [trackEnvio, setTrackEnvio ] = useState('');

    console.log(data);

    const [formData, setFormData ] = useState({
        nombre: '',
        apellido: '',
        email: '',
        tel: ''
    })

    const handleInputChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const compra = {
        user: formData,
        items: data.items,
        totalPrice: data.precioTotal,
        date: firebase.firestore.Timestamp.fromDate(new Date())
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        db.collection('sales').add(compra)
        .then(({id}) => {
            setVenta(true);
            setTrackEnvio(id);
        })
        .catch(err => console.log(err))
    }

    console.log(formData);

    return (
        <section className="checkout">
            <div className="container">
                <h2>Checkout</h2>

                {
                    !venta ?
                    <form onSubmit={handleSubmitForm}>
                        <input 
                            type="text" 
                            name="nombre" 
                            value={formData.nombre} 
                            placeholder="Nombre"
                            onChange={handleInputChange}/>
                        <input 
                            type="text" 
                            name="apellido" 
                            value={formData.apellido} placeholder="Apellido"
                            onChange={handleInputChange}/>
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            placeholder="E-mail"
                            onChange={handleInputChange}/>
                        <input 
                            type="tel" 
                            name="tel" 
                            value={formData.tel} 
                            placeholder="Teléfono"
                            onChange={handleInputChange}/>
                        
                        <button>Pagar</button>
                    </form> :
                    <p>La compra se realizo correctamente. tu numero de seguimiento es: {trackEnvio}</p>
                } 
                
            </div>
        </section>
    )
}

export default Payment;