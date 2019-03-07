import React from 'react';
import BubbleListView from '../BubbleListView/BubbleListView'
import {apifetch} from '../../../services/ApiFetcher'

class Bubbles extends React.Component{
    componentDidMount() {
        apifetch("bubbles")
        .then(response => response.json())
        .then(data => this.setState({ products: data}))
    }
    constructor(){
        super();
        this.state = ({ products: [] })
    }
    render(){
        return (
            <div className="ple">
                <h2 className="mb-4"> Bubbles Available </h2>
                <BubbleListView products={this.state.products}/>
            </div>
        )
    }
}
export default Bubbles;