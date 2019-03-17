/* List of bubbles */
import React from 'react';
import OrderListViewItem from '../OrderListViewItem/OrderListViewItem';
import { PropTypes } from 'prop-types';

const OrderListView = (props) =>{
    const {orders} = props;
    var counter = props.orders.length
    return(
        <div>
        <ul className="card-boarder-dark list-view">
            { props.orders.map(item => <OrderListViewItem key={item} telephone={item.fields.phoneNumber} counter={counter-=1} bubbles={ item.bubbles }/>) }
        </ul>
        </div>
    )
}

OrderListView.propTypes = {
    props: PropTypes.shape({
        orders: PropTypes.object,   // Contains unprocessed order information from the server
    })
}

export default OrderListView;

