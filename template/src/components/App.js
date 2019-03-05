import React from 'react';
import Navbar from './Navigation/Navbar/Navbar';
import Container from './Container/Container';
import Switch from 'react-router-dom/Switch';
import { Route, Redirect } from 'react-router-dom';
import Bubbles from './BubbleItems/Bubbles/Bubbles';
import Bundles from './BubbleItems/Bundles/Bundles';
import About from './About/About';
import Cart from './Cart/Cart';

const App = () => {
    
    return (
        <>
            <Navbar />
            <div className="container">
                <Switch>
                    <Route exact path="/" component={ Bubbles } />
                    <Route path="/Bubbles" render={ () => <Redirect to="/" />}/>
                    <Route exact path="/Bundles" component={ Bundles } />
                    <Route exact path="/About" component={ About } />
                    <Route exact path="/Cart" component={ Cart } />
                    
                </Switch>
            </div>
            <Container />
        </>
    )

};

export default App;
