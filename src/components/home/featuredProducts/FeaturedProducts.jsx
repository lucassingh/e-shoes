import {useState, useEffect, memo} from 'react';
import ProductCard from '../../shared/productCard/ProductCard';
import './FeaturedProducts.css';
import {getFirestore} from '../../../db/index';
import Loader from '../../shared/loader/Loader';

const FeaturedProducts = () => {
    const [items, setItems] = useState([]);
    const db = getFirestore();

    const getProducstFromDB = () => {
        db.collection('products').where("outstanding", "==", true).get()
        .then(docs => {
            let arr = [];
            docs.forEach(doc => {
                //console.log(doc.id);
                //console.log(doc.data())
                arr.push({id: doc.id, data: doc.data()})
            })
            // eslint-disable-next-line react-hooks/exhaustive-deps
            setItems(arr);
        })
        .catch(e => console.log(e));
    }

    useEffect(() => {
        getProducstFromDB();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <section className="featuredProducts">
            <div className="container">
                {
                    items.length ?
                    <>
                        <h2>Productos destacados</h2>

                        <ul>
                            {
                                items.map((item) => (
                                    <li key={item.id}>
                                        <ProductCard 
                                            id={item.id}
                                            img={item.data.img}
                                            titulo={item.data.title} 
                                            precio={item.data.price} 
                                            categoria={item.data.category}
                                        />
                                    </li>
                                ))
                            }
                        </ul>
                    </> :
                    <Loader/>
                }
            </div>
        </section>
    )
}

export default memo(FeaturedProducts);