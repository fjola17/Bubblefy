/* List of bubbles */
import React from 'react';
import OrderListViewItem from '../OrderListViewItem/OrderListViewItem';

const OrderListView = (props) =>{
    var counter = props.orders.length
    return(
        <div>
        <ul className="card-boarder-dark list-view">
            { props.orders.map(item => <OrderListViewItem key={item} telephone={item.fields.phoneNumber} counter={counter-=1} bubbles={ item.bubbles }/>) }
        </ul>
        </div>
    )
}
export default OrderListView;