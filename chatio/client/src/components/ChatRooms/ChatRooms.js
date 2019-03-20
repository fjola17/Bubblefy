//here user can see all the chatrooms, and join one
//different componment for creating a chatroom??
import React from 'react';
import { Link } from 'react-router-dom';
import connect from 'react-redux';
import { socket } from '../../services/socketService';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import PropTypes from 'prop-types';


class ChatRooms extends React.Component{
    componentDidMount(){
        socket.emit('rooms');
        socket.on('roomlist', rooms => {
            console.log(rooms);
            this.setState({
                rooms : Object.keys(rooms)
            });
        })
   }
    constructor(props){
        super(props);
        this.state = {
            rooms : []
        }
    }

    createRoom(roomName) {
        console.log(roomName);

        if(this.state.rooms.indexOf(roomName) === -1) {

            this.setState({
                rooms: [...this.state.rooms, roomName]
            });
        } else {
            toastr.error(`Room ${roomName} already exists`, 'Error');
        }
    }

   render(){
        return(
            <div>
                <h1 className="room-list">List of all available chatrooms</h1>
                <button className="btn btn-primary" onClick={() => this.createRoom(prompt("herherbig"))}>Create Room</button>
                <ChatRooms.roomList rooms={this.state.rooms} />
             </div>
        );
    }
}
ChatRooms.roomList = props => (
    props.rooms.map(room => <div key={room} className="chat-room"><Link to={`/room/${room}`}>{ room }</Link></div>)
);

ChatRooms.propTypes = {
    rooms: PropTypes.arrayOf(PropTypes.string)
}

export default ChatRooms;
