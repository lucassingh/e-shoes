import {useState, useContext} from 'react';
import {Store} from '../../store/context-data';
import { getFirestore } from '../../db/index';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import './Payment.css';
import './Form.css';
import  firebase from 'firebase/app';
import Compra from './compraExitosa/CompraExitosa';

const Payment = () => {

    const db = getFirestore();

    const [data, setData ] = useContext(Store);

    const [venta, setVenta] = useState(false);

    const [trackEnvio, setTrackEnvio ] = useState('');

    const [formData, setFormData ] = useState({
        nombre: '',
        apellido: '',
        email: '',
        tel: '',
        localidad: '',
        calle: '',
        numero: '',
        cPostal: ''
    })

    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [focus, setFocus] = useState('');

    const handleInputChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const [count, setCount] = useState(1)

    /* const updateForm = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }*/

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
            setData({ cantidad: 0, items: [] });
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
                                            <div className="material-form-field">
                                                <input type="text"
                                                    name="nombre" 
                                                    id="field-text"
                                                    required
                                                    value={formData.nombre}
                                                    onChange={handleInputChange}/>
                                                <label className="material-form-field-label">
                                                    Nombre
                                                </label>
                                            </div>
                                            <div className="material-form-field">
                                                <input type="text"
                                                name="apellido"
                                                required
                                                value={formData.apellido}
                                                onChange={handleInputChange}/>
                                                <label className="material-form-field-label">
                                                    Apellido
                                                </label>
                                            </div>

                                            <div className="material-form-field">
                                                <input type="email" 
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleInputChange}/>
                                                <label className="material-form-field-label">
                                                    Email
                                                </label>
                                            </div>
                                            <div className="material-form-field">
                                                <input type="tel"
                                                name="tel"
                                                required
                                                value={formData.tel}
                                                onChange={handleInputChange}/>
                                                <label className="material-form-field-label">
                                                    Teléfono
                                                </label>
                                            </div>
                                        </div>
                                    </>
                                ) : null}
                                {count === 2 ? (
                                    <>
                                        <h5>Datos tarjeta de credito</h5>
                                        <div className="container-credit-form">                                    
                                            <Cards
                                                cvc={cvc}
                                                expiry={expiry}
                                                focused={focus}
                                                name={name}
                                                number={number}
                                            />
                                            <div className="form-group form-grup-card">
                                                <div className="material-form-field">
                                                    <input type="tel"
                                                        name="number"
                                                        required
                                                        value={number}
                                                        onChange={e => setNumber(e.target.value)}
                                                        onFocus={e => setFocus(e.target.name)}/>
                                                    <label className="material-form-field-label">
                                                        Número Tarjeta
                                                    </label>
                                                </div>                                        
                                                <div className="material-form-field">
                                                    <input type="text"
                                                        name="name"
                                                        required
                                                        value={name}
                                                        onChange={e => setName(e.target.value)}
                                                        onFocus={e => setFocus(e.target.name)}/>
                                                    <label className="material-form-field-label">
                                                        Nombre Tarjeta
                                                    </label>
                                                </div>                                       
                                                <div className="material-form-field">
                                                    <input type="text"
                                                        name="expiry"
                                                        value={expiry}
                                                        required
                                                        onChange={e => setExpiry(e.target.value)}
                                                        onFocus={e => setFocus(e.target.name)}/>
                                                    <label className="material-form-field-label">
                                                        Fecha Expiración
                                                    </label>
                                                </div>                                       
                                                <div className="material-form-field">
                                                    <input type="tel"
                                                        name="cvc"
                                                        required
                                                        value={cvc}
                                                        onChange={e => setCvc(e.target.value)}
                                                        onFocus={e => setFocus(e.target.name)}/>
                                                    <label className="material-form-field-label">
                                                        CVC
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : null}
                                {count === 3 ? (
                                    <>
                                        <h5>Datos de Envío</h5>
                                        <div className="form-group">
                                            <div className="material-form-field">
                                                <input type="text"
                                                    name="localidad"
                                                    required
                                                    value={formData.localidad}
                                                    onChange={handleInputChange}/>
                                                <label className="material-form-field-label">
                                                    Localidad
                                                </label>
                                            </div>
                                            <div className="material-form-field">
                                                <input type="text"
                                                    name="calle"
                                                    required
                                                    value={formData.calle}
                                                    onChange={handleInputChange}/>
                                                <label className="material-form-field-label">
                                                    Calle
                                                </label>
                                            </div>
                                            <div className="material-form-field">
                                                <input type="text"
                                                    name="numero"
                                                    required
                                                    value={formData.numero}
                                                    onChange={handleInputChange}/>
                                                <label className="material-form-field-label">
                                                    Número
                                                </label>
                                            </div>
                                            <div className="material-form-field">
                                            <input type="text"
                                                name="cPostal"
                                                required
                                                value={formData.cPostal}
                                                onChange={handleInputChange}/>
                                            <label className="material-form-field-label">
                                                Código Postal
                                            </label>
                                        </div>
                                        </div>                                
                                    </>
                                ) : null}
                                {count === 3 ? (
                                    <div className="container-button-submit">
                                        <button 
                                            className="btn-comprar" 
                                            type="submit"
                                            disabled={!(formData.nombre !== '' && 
                                            formData.nombre.apellido !== '' && 
                                            formData.nombre.email !== '' && 
                                            formData.nombre.tel !== '' && 
                                            formData.nombre.localidad !== '' && 
                                            formData.nombre.calle !== '' && 
                                            formData.nombre.numero !== '' && 
                                            formData.nombre.cPostal !== '')}
                                        >
                                            Comprar
                                        </button>
                                    </div>
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
                    <Compra idCompra={trackEnvio}/>
                }
            </div>
        </section>
    )
}

export default Payment;
