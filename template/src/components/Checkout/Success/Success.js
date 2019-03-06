import React from 'react'
import Link from 'react-router-dom/Link';

const Success = () =>{
    return(
        <div>
        <p>Your order has been successfully placed </p>
            <div class="btn btn-success"><Link to="/">Ok</Link></div>
        </div>
    )
}
export default Success;