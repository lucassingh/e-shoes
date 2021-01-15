import {useState, useEffect} from 'react';
import { products } from '../../productsData';
import {useParams} from 'react-router-dom';
import './Category.css';
import ListProduct from './ListProducts/ListProducts';

const Category = () => {
    const {category_name} = useParams();
    const [prods, setProds] = useState([]);

    useEffect(() => {
        if(category_name) {
            setProds(products.filter(prod => prod.category === category_name))
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