import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './Category.css';
import ListProduct from './ListProducts/ListProducts';
import { getFirestore } from '../../db/index';

const Category = () => {
    const {category_name} = useParams();
    const [prods, setProds] = useState([]);
    const db = getFirestore();

    useEffect(() => {
        if(category_name) {
            db.collection('products').where('category', '==', category_name).get()
            .then(response => {
                let arr = [];
                response.forEach(doc => {
                    arr.push({id: doc.id, data: doc.data()})
                })

                setProds(arr);
            })
        }
    }, [category_name])

    return (
        <section className="category">
            <h2>{category_name.split('-').join(' ')}</h2>
            <ListProduct products={prods} />
        </section>
    )
}

export default Category;