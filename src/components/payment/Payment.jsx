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

    const [formData, setFormData ] = useState({
        nombre: '',
        apellido: '',
        email: '',
        tel: ''
    })

    const handleInputChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const [count, setCount] = useState(1)

    const updateForm = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
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
            console.log(id);
        })
        .catch(err => console.log(err))
    }    

    return (
        <section className="checkout">
            <div className="container">
                <h2>Checkout</h2>

            {
                !venta ?
                    <div>
                        <h3>Step {count} of 3</h3>
                        <form onSubmit={handleSubmitForm}>
                            {count === 1 ? (
                                <div className="form-group">
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
                                </div>
                            ) : null}
                            {count === 2 ? (
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    onChange={updateForm}
                                    value={formData.name}
                                    />
                                </div>
                            ) : null}
                            {count === 3 ? (
                                <div className="form-group">
                                    <label>Password</label>
                                    <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    onChange={updateForm}
                                    value={formData.password}
                                    />
                                </div>
                            ) : null}
                            {count === 3 ? (
                                <button className="btn btn-primary" type="submit">
                                    Submit
                                </button>
                            ) : null}
                        </form>
                        <button
                            className="btn btn-dark"
                            type="submit"
                            onClick={() => setCount(count - 1)}
                            disabled={count < 2}
                        >
                            Back
                        </button>
                        <button
                            className="btn btn-light"
                            type="submit"
                            onClick={() => setCount(count + 1)}
                            disabled={count > 2}
                        >
                            Next
                        </button>
                    </div>:
                <p>La compra se realizo correctamente. tu numero de seguimiento es: {trackEnvio}</p>
            }
            </div>            
        </section>
    )
}

export default Payment;