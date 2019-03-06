import React from 'react';
import BubblesInCart from '../BubblesInCart/BubblesInCart';
import ProceedOrder from '../../Checkout/ProceedOrder/ProceedOrder'
class Cart extends React.Component{
    componentDidMount(){
        /*var cartItems = getCart();
        var total = refreshCart();
        this.setState = {cartItems : cartItems,
        total : total}*/
    }
    constructor(){
        super();
        this.state = {
            cartItems: [],
            total : 0
        }
    }
    
    render(props){  
        return(
            <div>
                <p>Items in your cart</p>
                <BubblesInCart />
                <ProceedOrder />
            </div>
        )
    }
}
export default Cart;