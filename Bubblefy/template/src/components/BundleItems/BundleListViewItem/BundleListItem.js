import React from 'react'
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BundleListItem = (props) => {
    return(
        <li className="FrontElement"><Link to={`/bundles/${props.bundle.id}`}>{`${props.bundle.name}`}</Link></li>
    )
}
/* Props for each bundle */
BundleListItem.propTypes = {
    bundle : propTypes.shape({
        id: propTypes.number.isRequired,
        name: propTypes.string.isRequired,
        items: propTypes.array.isRequired
    }).isRequired
}
export default BundleListItem;