import React from 'react';
import BubbleViewListItem from '../BubbleListViewItem/BubbleListViewItem'

const BubbleViewList = (props) =>{
    console.log(props)
    console.log(props.products)
    return(
        <ul className="list-view">
            { props.products.map(item => <BubbleViewListItem key ={item.id} product ={ item }/>) }
        </ul>
    )
}
export default BubbleViewList;