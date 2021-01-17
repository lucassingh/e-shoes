import Slider from './slider/Slider'
import FeaturedProducts from './featuredProducts/FeaturedProducts'
import News from './../shared/news/News';
import { NewsHome } from './../shared/news/NewsData';

const Home = () => {

    return (
        <>
            <Slider />
            <FeaturedProducts/>
            <News data={NewsHome}/>
        </>
    )
}

export default Home;