import React from 'react';
import StorePickup from '../StorePickup/StorePickup';
import StoreDelivery from '../StoreDelivery/StoreDelivery';
class Pickup extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            store: false,
            deliver: false

        }
        this.deliverHome = this.deliverHome.bind(this);
        this.deliverStore = this.deliverStore.bind(this);
    }
    deliverStore(e){
        e.preventDefault();
        this.setState({store:true, deliver: false})
        return false
    }
    deliverHome(e){
        e.preventDefault();
        this.setState({deliver: true, store: false})
        return false
    }

    render(){

        let form;

        if(this.state.deliver){
            form = <StoreDelivery />
        }
        else if(this.state.store){
            form = <StorePickup />
        }
        return(
            <div>
                <div className="btn btn-primary" onClick={(e) => this.deliverStore(e)}>Store pickup</div>
                <div className="btn btn-primary" onClick={(e) => this.deliverHome(e)}>Deliver </div>
                {form}
            </div>
        )
    }


}
export default Pickup;
