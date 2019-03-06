import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

const BubbleViewListItem = (props) =>{
    return(
        <li className="card border-dark mb-3">
            <div className="ple">
                <img className="ple-img" src={props.product.image}/>
                <h4 className="card-title"><Link to={"/bubbles/" + props.product.id}>{props.product.name}</Link></h4>
                <p className="card-text">{props.product.price}</p>
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