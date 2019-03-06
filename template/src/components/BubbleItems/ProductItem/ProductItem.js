import React from 'react';
import { apifetch } from '../../../services/ApiFetcher';
class ProductItem extends React.Component{
    
    componentDidMount() {
        const id = this.props.match.params.BubbleId;
        apifetch(`bubbles/${id}`)
        .then(request => request.json())
        .then(data => this.setState({products: data}))
        
        console.log(id);
    }
    constructor(){
        super();
        this.state = {
            products: []
        }
    }
    render(match){
        return (
            <div>
                <div className="d-flex">
                    <img className="flex-column" src={this.state.products.image}/>
                    <div className="flex-column">
                        <div className="flex-row">{this.state.products.name} </div>
                        <div className="flex-row">{this.state.products.price}</div>
                        <div className="flex-row">{this.state.products.description}</div>
                        <div className="flex-row btn btn-primary">Add to cart </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ProductItem;
