//here user can see all the chatrooms, and join one
//different componment for creating a chatroom??
import React from 'react';
import { Link } from 'react-router-dom';
import { socket } from '../../services/socketService';
import { Redirect } from 'react-router-dom';
import toastr from 'toastr';
import PropTypes from 'prop-types';


class ChatRooms extends React.Component {
    componentDidMount() {
        socket.on('roomlist', rooms => {
            this.setState({
                rooms: Object.keys(rooms)
            });
        })
        socket.emit('rooms'); // Fetch rooms
    }
    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
            yourRoom: ""
        }
    }

    createRoom(roomName) {
        if (this.state.rooms.indexOf(roomName) === -1) {
            this.setState({ yourRoom: roomName })
        } else {
            toastr.error(`Room ${roomName} already exists`, 'Error');
        }
    }

    render() {
        const { rooms, yourRoom } = this.state;
        if (yourRoom !== "") {
            return (
                <Redirect to={`/room/${yourRoom}`} />
            );
        } else {
            return (
                <div className="rooms">
                    <h1 className="room-list">List of all available chatrooms</h1>
                    <button className="btn btn-primary" onClick={() => this.createRoom(prompt("Your room name"))}>Create Room</button>
                    <ChatRooms.roomList rooms={rooms} />
                </div>
            );
        }
    }
}
ChatRooms.roomList = props => (
    props.rooms.map(room => <div key={room} className="chat-room"><Link to={`/room/${room}`}>{room}</Link></div>)
);

ChatRooms.propTypes = {
    // List of rooms that the user can join
    rooms: PropTypes.arrayOf(PropTypes.string)
}

export default ChatRooms;
