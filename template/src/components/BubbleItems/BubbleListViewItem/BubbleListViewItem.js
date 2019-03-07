/* Displays bubble item */
import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

const BubbleViewListItem = (props) =>{
    return(
        <li className="mb-3 d-flex">
                <img className="mr-3 flex-column ple-img" src={props.product.image}/>
                <div className="flex-column">
                <h4 className="flex-row card-title"><Link to={"/bubbles/" + props.product.id}>{props.product.name}</Link></h4>
                <div className="flex-row card-text">Price: {props.product.price} kr</div>
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
export default BubbleViewListItem;
