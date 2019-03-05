import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

const BubbleViewListItem = (props) =>{
    console.log(props)
    return(
        <li className="card border-dark mb-3">
            <div className="ple"><h4 className="card-title"><Link to={ "/bubbles/" + props.product.id }>{props.product.name}</Link></h4>
            </div>
        </li>
    )
}

BubbleViewListItem.propTypes = {
    product : propTypes.shape({
        id:propTypes.number.isRequired,
        name: propTypes.string.isRequired,
        price: propTypes.number.isRequired,
        image: propTypes.string.isRequired
    }).isRequired
}

BubbleViewListItem.defaultProps = {
    product:
        {
            id: 1,
            name: "Bubble bubble",
            price: 499,
            image: "https://i.imgur.com/ZiNsJOp.png"
        }
}
export default BubbleViewListItem;