//Here user can set username
import React from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr'
import 'toastr/build/toastr.min.css';
//import SocketContext from '../../contexts/SocketContext';
import ChatRooms from '../ChatRooms/ChatRooms';
import { updateUser } from '../../actions/UserActions';
import { socket } from '../../services/socketService';
import PropTypes from 'prop-types';


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
        if (this.state.userName !== "") {
            const { userName, rooms } = this.state;
            const { updateUser } = this.props;
            socket.emit('adduser', userName, (response) => {
                if(response) {
                    console.log("Response ok");
                    this.setState({ hasName: true });
                    updateUser({ userName, rooms });
                } else {
                    toastr.error('Name taken.', 'Error');
                }
            });
        } else {
            toastr.error('Username can\'t be blank', 'Error');
        }
    }
    render() {
        const { userName } = this.props.user;
        if (userName == "") {
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

UserName.propTypes = {
    userName: PropTypes.string
}

export default connect(mapStateToProps, { updateUser })(UserName);//connect(mapStateToProps, {updateUser})(UserName);
