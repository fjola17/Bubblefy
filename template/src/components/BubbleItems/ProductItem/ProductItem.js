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
                { JSON.stringify(this.state.products) }
            </div>
        )
    }
}
export default ProductItem;
