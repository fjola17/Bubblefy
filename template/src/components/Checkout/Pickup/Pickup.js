import React from 'react';
import StorePickup from '../StorePickup/StorePickup';

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
        console.log("hdkagfka")
        e.preventDefault();
        this.setState({store:true})
        return false
    }
    deliverHome(e){
        console.log("dkakjfdfa")
        e.preventDefault();
        this.setState({deliver: true})
        return false
    }
    render(){
      /*  if(!this.deliverHome){
           return( <div>hello</div>)
        }
        if(!this.deliverStore){
            return (<div>ble</div>)
        }
        else if(this.deliverHome && this.deliverStore){
        */return(
            <div>
                <div className="btn btn-primary" onClick={(e) => this.deliverStore(e)}>Store pickup</div>
                <div className="btn btn-primary" onClick={(e) => this.deliverHome(e)}>Deliver </div>
                <StorePickup />
   
            </div>
        )
    }
        
    
}
export default Pickup;