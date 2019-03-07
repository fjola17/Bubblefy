import React from 'react'
import Link from 'react-router-dom/Link';

const Success = () =>{
    return(
        <div className="ple text-center">
        <p className="text-info">Your order has been successfully placed </p>
            <div className="btn btn-success"><Link className="text-light" to="/">Continue shopping</Link></div>
        </div>
    )
}
export default Success;