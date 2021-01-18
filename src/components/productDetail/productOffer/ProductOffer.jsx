import '../../category/ListProducts/ListProducts.css';
import {useState} from 'react';
import ProductCard from './../../shared/productCard/ProductCard';
import {BsListUl, BsFillGridFill} from 'react-icons/bs';

const ProductOffer = ({products}) => {
    const [wayToShow, setWayToShow] = useState(true);

    return (
        <section className="products">

            <div>
                {
                    wayToShow ? 
                    <BsListUl onClick={() => setWayToShow(!wayToShow)} title="Ver como lista" /> :
                    <BsFillGridFill onClick={() => setWayToShow(!wayToShow)} title="Ver como grilla" />
                }
            </div>
           

            <ul className={`products_list ${wayToShow ? 'grid' : 'list'}`}>
                {
                    products.map(item => 
                    <li key={item.id}>
                        <ProductCard id={item.id} 
                            titulo={item.data.title} 
                            precio={item.data.price} 
                            categoria={item.data.category}
                            img={item.data.img}
                            type={`${wayToShow ? 'grid' : 'list'}`} />
                    </li>)
                }
            </ul>
        </section>
    )
}

export default ProductOffer;