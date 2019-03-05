import React from 'react';
import BundleListViewItem from '../BundleListViewItem/BundleListViewItem';

const BundleLstView = (props) =>{
    return(
        <ul className="list-view">
            {props.bundles.map(item=><BundleListViewItem key={item.id} bundle={item}/>)}
        </ul>
    )
}
export default BundleLstView;