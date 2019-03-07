import React from 'react';
import {apifetch} from '../../../services/ApiFetcher';
import OrderListView from '../OrderListView/OrderListView';

class Order extends React.Component{
    componentDidMount() {

    }

    constructor(){
        super();
        this.state = ({ 
            orders: [],
            number: "" 
        })
    }

    orderFetch(e) {
        var number = e.target.value
        apifetch(`orders/${number}`)
        .then((response) => {
            if(response.ok) {
                console.log("Response is ok");
                response.json().then(
                    data => {
                        this.setState({
                            orders: data,
                            number: number
                        })
                    }
                )
            } else {
                this.setState({
                    orders: [],
                    number: number
                })
            }
            if(response.status === 404) {
                console.log("Not found");
            }
        })
    }

    render(){
        var orders = () => {
            if(this.state.orders.length == 0) {
                return <div>No orders found for {this.state.number}</div>
            } else {
                return <div>{JSON.stringify(this.state.orders)}</div>
            }
        }
        return (
            <div className="ple">
                <h2 className="mb-4"> Orders Available </h2>
                <input type="text" onChange={ (e) => { this.orderFetch(e) }} placeholder="Telephone number"/>
                { orders() }
            </div>
        )
    }
}
export default Order;