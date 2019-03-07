import React from 'react';
import { Link } from 'react-router-dom';
import {apifetch} from '../../../services/ApiFetcher';
import { unmarshallStorage } from '../../../services/Storage';

class LastOrder extends React.Component {
    componentDidMount() {
        apifetch(`orders/${this.props.match.params.telephone}`)
        .then(response => response.json())
        .then(data => unmarshallStorage(JSON.stringify(data[data.length - 1].bubbles)))
        .then(this.setState({redirect: true}))
    }
    constructor(){
        super();
        this.state = {
            redirect: false
        }
    }
    render(){
        var redirect = () => {
            if(this.state.redirect) {
                return <div><h1>Last order received!</h1><Link to="/Cart">Go to checkout!</Link></div>
            } else {
                <p>PROCESSING!</p>
            }
        }
        return(
            <div className="ple">
                { redirect() }
            </div>
        )
    }
}
export default LastOrder;