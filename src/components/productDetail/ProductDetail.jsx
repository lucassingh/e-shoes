import {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import CardDetail from './cardDetail/CardDetail';
import './ProductDetail.css';
import {getFirestore} from '../../db/index';
import Loader from '../shared/loader/Loader';
import ProductOffer from './productOffer/ProductOffer';

const ProductDetail = () => {
    const {id} = useParams();

    const [product, setProduct] = useState(null);

    const [prodsOffer, setProductOffer] = useState([]);

    const db = getFirestore();    

    useEffect(() => {
        db.collection('products').doc(id).get()
        .then(doc => {
            if(doc.exists) {
                setProduct(doc.data());
            }
        })
        .catch(e => console.log(e));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        db.collection("products").where("price", "<", 3000).orderBy("price", "asc").get()
        .then(response => {
            let arr = []
            response.forEach(doc => {
                arr.push({id: doc.id, data: doc.data()})
            })
            setProductOffer(arr);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [prodsOffer])

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

            <div className="container-info-detail">
                <div className="info-detail">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Corrupti magnam, architecto obcaecati excepturi, eius accusamus
                        necessitatibus, repellendus sequi blanditiis voluptate 
                        eos fugiat? Voluptatem cum quos a, quia error officia ipsum!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Corrupti magnam, architecto obcaecati excepturi, eius accusamus
                        necessitatibus, repellendus sequi blanditiis voluptate 
                        eos fugiat? Voluptatem cum quos a, quia error officia ipsum!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Corrupti magnam, architecto obcaecati excepturi, eius accusamus
                        necessitatibus, repellendus sequi blanditiis voluptate 
                        eos fugiat? Voluptatem cum quos a, quia error officia ipsum!
                    </p>
                </div>
            </div>
            <section className="category">
                <h2>Productos sugeridos</h2>
                <ProductOffer products={prodsOffer}/>
            </section>
        </>
    )
}

export default ProductDetail;