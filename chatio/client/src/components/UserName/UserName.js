//Here user can set username
import React from 'react';
import { connect } from 'react-redux';
//import SocketContext from '../../contexts/SocketContext';
import ChatRooms from '../ChatRooms/ChatRooms';
import { updateUser } from '../../actions/UserActions';
import { socket } from '../../services/socketService';

class UserName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasName: false,
            userName: "",
            rooms: {}
        }
    }
    onInput(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onFormSubmit(e) {
        e.preventDefault();
        if (this.props.userName !== '') {
            const { userName, rooms } = this.state;
            const { updateUser } = this.props;
            socket.emit('adduser', userName, (response) => {
                if(response) {
                    console.log("Response ok");
                    this.setState({ hasName: true });
                    updateUser({ userName, rooms });
                } else {
                    alert('name taken!');
                }
            });
        } else {
            // Toastr display "username can't be blank"?
        }
    }
    render() {
        const { userName, hasName } = this.state;
        if (!hasName && this.props.user.userName == "") {
            return (
                <div className="user-name">
                    <h2>Please enter your user name</h2>
                    <div id="user-form">
                        <form action="submit" onSubmit={e => this.onFormSubmit(e)}>
                            <input type="text" name="userName" onInput={e => this.onInput(e)} onKeyDown={e => {if(e.keyCode == 13) { this.onFormSubmit(e) } }} placeholder="Please enter your username" />
                            <button className="btn btn-primary">Confirm</button>
                        </form>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="chat-rooms"><ChatRooms /></div>
            )
        }
    }
}

const mapStateToProps = reduxStoreState => {
    return reduxStoreState;
}

export default connect(mapStateToProps, { updateUser })(UserName);//connect(mapStateToProps, {updateUser})(UserName);