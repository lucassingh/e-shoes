import {useState} from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Store} from './store/context-data';
import Category from './components/category/Category';
import Cart from './components/cart/Cart';
import Navigation from './components/shared/navigation/Navigation';
import ProductDetail from './components/productDetail/ProductDetail';
import Home from './components/home/Home';
import { FooterContainer } from './components/shared/footer/containers/FooterContainer';
import Newsletter from './components/shared/newsletter/Newsletter';
import Payment from './components/payment/Payment';
import ErrorPage from './404-error/ErrorPage';

function App() {
    const [data, setData] = useState({
        items: [],
        cantidad: 0,
        freeShipping: 4000,
        cuotas: 3,
        precioTotal: 0,
    })
    return (
        <>
            <Store.Provider value={[data, setData]}>
                <BrowserRouter>
                <Navigation/>            
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/cart">
                        <Cart />
                    </Route>
                    <Route exact path="/payment">
                        <Payment/>
                    </Route>                    
                    <Route exact path="/:category_name">
                        <Category />
                    </Route>
                    <Route exact path="/:category_name/:id">
                        <ProductDetail/>
                    </Route>
                    <Route path="*">
                        <ErrorPage />
                    </Route>
                </Switch>
                <Newsletter/>
                <FooterContainer/>
                </BrowserRouter>
            </Store.Provider>
        </>
    );
}

export default App;
