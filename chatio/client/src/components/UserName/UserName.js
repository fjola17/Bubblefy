//Here user can set username
import React from 'react'

class UserName extends React.Component{
    componentDidMount(){

    }
    constructor(){
        super();
    }
    render(){
        return(
            <div className="user-name">
                <input type="text" placeholder="Please enter your username"/>
                <button className="btn btn-primary">Confirm</button>
            </div>
        )
    }
}
export default UserName;