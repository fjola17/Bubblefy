/* List of bubbles */
import React from 'react';
import BubbleViewListItem from '../BubbleListViewItem/BubbleListViewItem'
import PropTypes from 'prop-types';

const BubbleViewList = (props) =>{

    return(
        <div>
        <ul className="card-boarder-dark list-view">
            { props.products.map(item => <BubbleViewListItem key ={item.id} product ={ item }/>) }
        </ul>
        </div>
    )
}
BubbleViewList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object)
}
export default BubbleViewList;
