import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './Category.css';
import ListProduct from './ListProducts/ListProducts';
import { getFirestore } from '../../db/index';
import NikeJumbotron from './../shared/jumbotron/nikejumbotron/NikeJumbotron';
import AdidasJumbotron from './../shared/jumbotron/adidasJumbotron/AdidasJumbotron';
import PumaJumbotron from './../shared/jumbotron/pumaJumbotron/PumaJumbotron';
import News from '../shared/news/News';
import { NewsNike, NewsAdidas, NewsPuma } from './../shared/news/NewsData';

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

    const newsCategory = () => {
      switch(category_name) {
            case 'nike':   return <News data={NewsNike}/>;
            case "adidas":   return <News data={NewsAdidas}/>;
            case "puma": return <News data={NewsPuma}/>;
            default:      return <h1>No category match</h1>
        }
    }

    return (
        <>
            {jumbotronCategory()}

            <section className="category">
                <h2>Shop {category_name.split('-').join(' ')}</h2>
                <ListProduct products={prods} />
            </section>

            {newsCategory()}
        </>
    )
}

export default Category;