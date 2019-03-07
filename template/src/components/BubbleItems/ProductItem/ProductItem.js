import React from 'react';
import { apifetch } from '../../../services/ApiFetcher';
class ProductItem extends React.Component{
    
    componentDidMount() {
        const id = this.props.match.params.BubbleId;
        apifetch(`bubbles/${id}`)
        .then(request => request.json())
        .then(data => this.setState({products: data}))
    }
    constructor(){
        super();
        this.state = {
            products: []
        }
    }

    productGet(productName) {
        return localStorage.getItem(productName);
    }

    productIncrement(productName) {
        if (this.productGet(productName) === null) {
            localStorage.setItem(productName, 1);
        } else {
            localStorage.setItem(productName, parseInt(this.productGet(productName)) + 1);
        }
    }

    incrementCart(productName) {
        this.productIncrement(productName);
        this.forceUpdate();
    }

    render(match){
        var cartInfo = () => {
            if(this.productGet(this.state.products.name) === null) {
                return <p>Nothing of this product in cart</p>
            } else {
                return <p>Ooh baby, so many bubbles. { this.productGet(this.state.products.name) } to be exact</p>
            }
       }

       var resolvedInfo = cartInfo();

       return (
            <div>
                <div className="d-flex">
                    <img className="flex-column" src={this.state.products.image}/>
                    <div className="flex-column">
                        <div className="flex-row">{this.state.products.name} </div>
                        <div className="flex-row">{this.state.products.price}</div>
                        <div className="flex-row">{this.state.products.description}</div>
                        <div onClick={ () => {this.incrementCart(`${this.state.products.name}`) }} className="flex-row btn btn-primary">Add to cart </div>
                    </div>
                </div>
                { resolvedInfo }
            </div>
        )
    }
}
export default ProductItem;
