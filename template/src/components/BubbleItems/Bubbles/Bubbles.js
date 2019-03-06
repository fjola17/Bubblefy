import React from 'react';
import BubbleListView from '../BubbleListView/BubbleListView'
import {apifetch} from '../../../services/ApiFetcher'
//import { getBubbleItems } from "../../../context/BubbleContext/BubbleContext";

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
            <div>
                <BubbleListView products={this.state.products}/>
            </div>
        )
    }
}
export default Bubbles;