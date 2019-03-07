/* Displays order item */
import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';


const OrderListViewItem = (props) =>{
    const { bubbles, counter, telephone } = props;
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

OrderListViewItem.propTypes = {
    props: PropTypes.shape({
        bubbles: PropTypes.object,  // Contains information about the ordered products and their quantities
        counter: PropTypes.number,  // If this becomes 0 then it means that it is the last order
        telephone: PropTypes.string // Routes to the orderee's telephone for making the same order again
    })
}

export default OrderListViewItem;