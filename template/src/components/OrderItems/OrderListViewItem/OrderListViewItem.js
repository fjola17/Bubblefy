/* Displays order item */
import React from 'react';
import { Link } from 'react-router-dom';

const OrderListViewItem = (props) =>{
    var lastOrder = () => {
        if(props.counter == 0) {
            return <h4><Link to={`/lastOrder/${props.telephone}`}>Order Last Order</Link></h4>
        }
    }

    return(
        <li className="mb-3 d-flex">            
            { lastOrder() }
            <br />
            { 
                Object.keys(props.bubbles).map(
                    bubble => {
                        return <div>{bubble.substring("bubbles::".length, bubble.length)}: {props.bubbles[bubble]}<br /></div>
                    }
                )
            }
            <hr />
        </li>
    )
}

export default OrderListViewItem;