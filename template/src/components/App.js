import React from 'react';
import Navbar from './Navigation/Navbar/Navbar';
import Switch from 'react-router-dom/Switch';
import { Route, Redirect } from 'react-router-dom';
import Bubbles from './BubbleItems/Bubbles/Bubbles';
import Bundles from './BundleItems/Bundles/Bundles';
import BundleItem from './BundleItems/BundleItem/BundleItem';
import About from './About/About';
import Cart from './CartItems/Cart/Cart';
import ProductItem from './BubbleItems/ProductItem/ProductItem';
import Order from './OrderItems/Orders/Order';
import Error from './Error/Error';
import HomePage from './HomePage/HomePage';
import Success from './Checkout/Success/Success';

class App extends React.Component {
    render(){
        return (
            <>
                <Navbar />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={ HomePage } />
                        <Route exact path="/Bubbles" component={ Bubbles }/>
                        <Route exact path="/Bundles" component={ Bundles } />
                        <Route exact path="/Bundles/:BundleId" component={ BundleItem } />
                        <Route exact path="/About" component={ About } />
                        <Route exact path="/Cart" component={ Cart } />
                        <Route exact path="/Bubbles/:BubbleId" component={ProductItem} />
                        <Route exact path="/Orders" component={ Order } />
                        <Route exact path="/Success" component={ Success } />
                        <Route path="/*" component={Error}/>
                    </Switch>
                </div>
            </>
        )
    }
};

export default App;
