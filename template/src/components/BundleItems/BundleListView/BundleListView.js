/* List of bundles */
import React from 'react';
import { Link } from 'react-router-dom';

const BundleLstView = (props) =>{
    return(
        <div className="ple">
        <h2>Bundles Available </h2>
            {props.bundles.map(
                bundle => {
                    return <h3 className="mt-5"><Link to={`/bundles/${bundle.id}`}>{`${bundle.name}`}</Link></h3>
                }
            )}
        </div>
    )
}
export default BundleLstView;