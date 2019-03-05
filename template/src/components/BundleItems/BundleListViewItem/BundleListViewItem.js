import React from 'react'
import propTypes from 'prop-types';

const BundleListViewItem = (props) =>{
    return(
        <li className="card border-dark mb-3">
            <div className="ple">
                <h4 className="card-title">{props.bundle.name}</h4>
            </div>
        </li>
    )
    
}

BundleListViewItem.propTypes = {
    bundle : propTypes.shape({
        id: propTypes.number.isRequired,
        name: propTypes.string.isRequired,
        items: propTypes.array.isRequired
    }).isRequired
}
export default BundleListViewItem;