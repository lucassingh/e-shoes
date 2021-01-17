import {useState, useContext} from 'react';
import {Store} from '../../store/context-data';
import { getFirestore } from '../../db/index';
import './Payment.css';
import './Form.css';
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
                        <h3>Paso {count} de 3</h3>
                        <form onSubmit={handleSubmitForm}>
                            {count === 1 ? (
                            <>
                                <h5>Datos personales</h5>
                                <div className="form-group">
                                    <div class="material-form-field">
                                        <input type="text" 
                                            required 
                                            name="nombre" 
                                            id="field-text"
                                            value={formData.nombre}
                                            onChange={handleInputChange}/>
                                        <label class="material-form-field-label" 
                                            for="field-text">
                                            Nombre
                                        </label>
                                    </div>
                                    <div class="material-form-field">
                                        <input type="text" 
                                        required
                                        name="apellido" 
                                        value={formData.apellido}
                                        onChange={handleInputChange}/>
                                        <label class="material-form-field-label" 
                                            for="field-text">
                                            Apellido
                                        </label>
                                    </div>

                                    <div class="material-form-field">
                                        <input type="email" 
                                            required 
                                            name="email" 
                                            id="field-text"
                                            value={formData.email}
                                            onChange={handleInputChange}/>
                                        <label class="material-form-field-label" 
                                            for="field-text">
                                            Email
                                        </label>
                                    </div>
                                    <div class="material-form-field">
                                        <input type="tel" 
                                        required
                                        name="tel" 
                                        value={formData.tel}
                                        onChange={handleInputChange}/>
                                        <label class="material-form-field-label" 
                                            for="field-text">
                                            Teléfono
                                        </label>
                                    </div>
                                </div>
                            </>
                            ) : null}
                            {count === 2 ? (
                                <>
                                    <h5>Datos tarjeta de credito</h5>
                                    <div className="form-group">
                                        <div class="material-form-field">
                                            <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            onChange={handleInputChange}
                                            value={formData.name}
                                            />
                                            <label class="material-form-field-label" 
                                                for="field-text">
                                                Teléfono
                                            </label>
                                        </div>
                                        
                                        
                                    </div>
                                </>
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
                        <div className="container-button-form">
                            <button
                                className="btn-back"
                                type="submit"
                                onClick={() => setCount(count - 1)}
                                disabled={count < 2}
                            >
                                Anterior
                            </button>
                            <button
                                className="btn-next"
                                type="submit"
                                onClick={() => setCount(count + 1)}
                                disabled={count > 2}
                            >
                                Siguiente
                            </button>

                        </div>
                        
                    </div>:
                <p>La compra se realizo correctamente. tu numero de seguimiento es: {trackEnvio}</p>
            }
            </div>            
        </section>
    )
}

export default Payment;