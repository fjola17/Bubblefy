//Here user can set username
import React from 'react';
import connect from 'react-redux';
//import SocketContext from '../../contexts/SocketContext';
import ChatRooms from '../ChatRooms/ChatRooms';
import { updateUser} from '../../actions/UserActions';

class UserName extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            userName : "",
            rooms: {}
        }
    }
    onInput(e){
        this.setState({[e.target.name] : e.target.value});
    }
    onFormSubmit(e){
        e.preventDefault();
        const {userName, rooms} = this.props;
        const {updateUser} = this.props;
        updateUser({userName, rooms});
    }
    render(){
        const userName = this.state.userName;
        console.log(userName);
        if(userName === ''){
            return(
                <div className="user-name">
                <h2>Please enter your user name</h2>
                <div id="user-form">
                        <form action="submit">
                        <input type="text" placeholder="Please enter your username"/>
                        <button className="btn btn-primary">Confirm</button>
                    </form>
                    </div>
                </div>
            );
        }
        else {
            return(
                <div className="chat-rooms"><ChatRooms /></div>
            )
        }
    }
}/*
const mapStateToProps = reduxStoreState =>{
    //const {UserName}
    return{
        "": ""
    }

}*/
export default UserName;//connect(mapStateToProps, {updateUser})(UserName);