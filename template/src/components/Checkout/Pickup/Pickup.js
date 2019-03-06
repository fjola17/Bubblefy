import React from 'react';
import StorePickup from '../StorePickup/StorePickup';
//import StorePickup from '../StorePickup/StorePickup'

class Pickup extends React.Component{
    render(){
        return(
            <div>
                <div className="btn btn-primary">Store pickup</div>
                <div className="btn btn-primary">Deliver </div>
                <StorePickup/>
            </div>
        )
    }
}
export default Pickup;