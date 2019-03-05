import React from 'react';
import BubbleViewListItem from '../BubbleListViewItem/BubbleListViewItem'

const BubbleViewList = (props) =>{
    
    return(
        <ul className="list-view">
            { props.products.map(item => <BubbleViewListItem key ={item.id} product ={ item }/>) }
        </ul>
    )
}
export default BubbleViewList;