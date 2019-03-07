import React from 'react'
import Pickup from '../Pickup/Pickup'

class ProceedOrder extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            insert: false
        }
        this.getPickupOptions = this.getPickupOptions.bind(this);
    }
    getPickupOptions(e) {
        e.preventDefault();
        this.setState({insert: true})
        return true
    }
    render(){
        if(this.state.insert){
            
            return(<Pickup/>)
        }
        return(
            <div>
                <div className="btn btn-primary" onClick={(e) => this.getPickupOptions(e)}>Proceed order</div> 
            </div>
        )
    }
}
export default ProceedOrder;