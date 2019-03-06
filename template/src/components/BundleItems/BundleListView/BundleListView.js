import React from 'react';
import { Link } from 'react-router-dom';

const BundleLstView = (props) =>{
    console.log(props);
    return(
        <ul className="list-view">
            {props.bundles.map(
                bundle => {
                    return <Link to={`/bundles/${bundle.id}`}>{`${bundle.name}`}</Link>
                }
            )}
        </ul>
    )
}
export default BundleLstView;