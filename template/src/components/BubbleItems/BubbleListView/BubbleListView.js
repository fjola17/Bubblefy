/* List of bubbles */
import React from 'react';
import BubbleViewListItem from '../BubbleListViewItem/BubbleListViewItem'

const BubbleViewList = (props) =>{
    
    return(
        <div>
        <ul className="card-boarder-dark list-view">
            { props.products.map(item => <BubbleViewListItem key ={item.id} product ={ item }/>) }
        </ul>
        </div>
    )
}
export default BubbleViewList;