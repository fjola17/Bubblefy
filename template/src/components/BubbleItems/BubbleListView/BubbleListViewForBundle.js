import React from 'react';
import BubbleViewListItem from '../BubbleListViewItem/BubbleListViewItem';

const BubbleListViewForBundle = (props) => {
    console.log(props)
    return(
            <ul className="list-view">
                { 
                    props.items.map(
                    (item) => {
                        return <BubbleViewListItem key ={item.id} product ={ item }/> 
                    })
                }
            </ul>
    )
}

export default BubbleListViewForBundle;