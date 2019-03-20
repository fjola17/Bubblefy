//Here user can set username
import React from 'react';
import { connect } from 'react-redux';
//import SocketContext from '../../contexts/SocketContext';
import ChatRooms from '../ChatRooms/ChatRooms';
import { updateUser} from '../../actions/UserActions';

class UserName extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            hasName : false,
            userName : "",
            rooms: {}
        }
    }
    onInput(e){
        this.setState({[e.target.name] : e.target.value});
    }
    onFormSubmit(e){
        e.preventDefault();
        if(this.props.userName !== '') {
            const {userName, rooms} = this.props;
            const {updateUser} = this.props;
            updateUser({userName, rooms});
            this.setState({ hasName: true });
        } else {
            // Toastr display "username can't be blank"?
        }
    }
    render(){
        const {userName, hasName} = this.state;
        console.log(userName);
        if(!hasName){
            return(
                <div className="user-name">
                <h2>Please enter your user name</h2>
                <div id="user-form">
                    <form action="submit" onSubmit={ e => this.onFormSubmit(e) }>
                        <input type="text" name="userName" onInput={ e => this.onInput(e) } placeholder="Please enter your username"/>
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
}
const mapStateToProps = reduxStoreState =>{
    console.log(reduxStoreState);
    return{
        "": ""
    }

}
export default connect(mapStateToProps, {updateUser})(UserName);//connect(mapStateToProps, {updateUser})(UserName);