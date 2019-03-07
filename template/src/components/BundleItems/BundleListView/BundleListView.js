/* List of bundles */
import React from 'react';
import { Link } from 'react-router-dom';
import BundleListItem from '../BundleListViewItem/BundleListItem';
const BundleLstView = (props) =>{
    console.log(props.bundles)
    return(
        <ul className="list-view">
             {props.bundles.map(item=><BundleListItem key={item.id} bundle={item}/>)}

        </ul>
    )
}
export default BundleLstView;