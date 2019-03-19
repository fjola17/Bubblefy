//here user can see all the chatrooms, and join one
//different componment for creating a chatroom??
import React from 'react';
import connect from 'react-redux';

class ChatRooms extends React.Component{
    componentDidMount(){
        const {socket} = this.context;
        this.setState={            
            rooms : this.rooms
        }
    }
    constructor(props){
        super(props);
        this.state = {
            rooms : {}
        }
    }
    render(){
        return(
            <div>
                <h1 className="room-list">List of all available chatrooms</h1>
                <div className="chat-room">Snowball heaven</div>
                </div>
        )
    }
}

export default ChatRooms;