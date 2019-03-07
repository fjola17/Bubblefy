import React from 'react';
import BubbleViewListItem from '../BubbleListViewItem/BubbleListViewItem';
import PropTypes from 'prop-types';

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
BubbleListViewForBundle.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object)
}
export default BubbleListViewForBundle;
