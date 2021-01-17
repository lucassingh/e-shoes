import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './Category.css';
import ListProduct from './ListProducts/ListProducts';
import { getFirestore } from '../../db/index';
import NikeJumbotron from './../shared/jumbotron/nikejumbotron/NikeJumbotron';
import AdidasJumbotron from './../shared/jumbotron/adidasJumbotron/AdidasJumbotron';
import PumaJumbotron from './../shared/jumbotron/pumaJumbotron/PumaJumbotron';

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
                console.log(category_name)
                setProds(arr);
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category_name])

    const jumbotronCategory = () => {
      switch(category_name) {
            case 'nike':   return <NikeJumbotron/>;
            case "adidas":   return <AdidasJumbotron/>;
            case "puma": return <PumaJumbotron/>;
            default:      return <h1>No category match</h1>
        }
    }

    return (
        <section className="category">
            {jumbotronCategory()}
            <ListProduct products={prods} />
        </section>
    )
}

export default Category;