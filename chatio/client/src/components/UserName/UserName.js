//Here user can set username
import React from 'react';
import connect from 'react-redux';
//import SocketContext from '../../contexts/SocketContext';
import ChatRooms from '../ChatRooms/ChatRooms';

class UserName extends React.Component{
    componentDidMount(){
        const {socket} = this.context;
        this.setState = {
            userName : this.userName
        }
    }
    constructor(props){
        super(props);
        this.state = {
            userName : ""
        }
    }
    render(){
        const userName = this.state.userName;
        console.log(userName);
        if(userName === ''){
            return(
                <div className="user-name">
                    <h3>Login</h3>
                    <input type="text" placeholder="Please enter your username"/>
                    <button className="btn btn-primary">Confirm</button>
                </div>
            );
        }
        else {
            return(
                <div><ChatRooms/></div>
            )
        }
    }
}
export default UserName;