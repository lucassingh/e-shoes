import {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import CardDetail from './cardDetail/CardDetail';
import './ProductDetail.css';
import {getFirestore} from '../../db';
import Loader from '../shared/loader/Loader';

const ProductDetail = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const db = getFirestore();

    useEffect(() => {
        db.collection('products').doc(id).get()
        .then(doc => {
            if(doc.exists) {
                setProduct(doc.data());
            }
        })
        .catch(e => console.log(e));
    }, []);

    return (
        <>
            {
                product ?
                <div className="container">
                    <ol className="breadcrum">
                        <li>
                            <Link to={`/${product.category}`}>{product.category.split('-').join(' ')}</Link>
                        </li>
                        <li>
                            {product.title}
                        </li>
                    </ol>
                    
                    <CardDetail item={product} />
                </div> : 
                <Loader/>
            }
        </>
    )
}

export default ProductDetail;