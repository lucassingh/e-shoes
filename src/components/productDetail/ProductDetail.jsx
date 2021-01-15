import {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import CardDetail from './cardDetail/CardDetail';
import { products } from '../../productsData';
import './ProductDetail.css';

const ProductDetail = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null);

    const getProduct = new Promise((resolve) => {
        const selectedProduct = products.filter(item => item.id === parseInt(id));
        resolve(selectedProduct[0]);
    });

    useEffect(() => {
        getProduct
        .then(response => setProduct(response))
        .catch(error => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                <p>Cargando producto...</p>
            }
        </>
    )
}

export default ProductDetail;