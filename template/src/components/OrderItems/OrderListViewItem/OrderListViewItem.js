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
        <li className="mb-3 d-flex flex-column">            
            { lastOrder() }
            <br />
            <div className="d-flex flex-column">
            { 
                Object.keys(props.bubbles).map(
                    bubble => {
                        return <p className="ml-10">{bubble.substring("bubbles::".length, bubble.length)}: {props.bubbles[bubble]}<br /></p>
                    }
                )
            }
            </div>
            <hr />
        </li>
    )
}

export default OrderListViewItem;