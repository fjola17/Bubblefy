/* List of bundles */
import React from 'react';
import { Link } from 'react-router-dom';
import BundleListItem from '../BundleListViewItem/BundleListItem';
import PropTypes from 'prop-types';
const BundleLstView = (props) =>{
    console.log(props.bundles)
    return(
        <ul className="list-view">
             {props.bundles.map(item=><BundleListItem key={item.id} bundle={item}/>)}

        </ul>
    )
}

BundleLstView.propTypes = {
    bundles: PropTypes.arrayOf(PropTypes.object)
}

export default BundleLstView;
