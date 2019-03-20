import React from 'react'
import { connect } from 'react-redux';
import { socket } from '../../services/socketService';
import UserName from '../UserName/UserName';
import './chatWindow.css';

class ChatWindow extends React.Component{
    componentDidMount(props){
        const { roomName } = this.props.match.params;
        socket.emit('joinroom', {room: roomName}, (response, reason) => {
            if(response) {
                this.setState({ roomJoined: true });
            } else {
                alert(`Couldn't join room because: ${reason}`);
            }
        });
        this.setState({ roomName: this.props.match.params.RoomName })
    }
    constructor(props){
        super(props)
        this.state = {
            roomName: "",
            roomJoined: false,
        }
    }
    render(){
        const { roomJoined, roomName } = this.state;
        if(roomJoined) {
            return(
                <div className="chat-window">
                    <ChatWindow.Title roomName={roomName} />
                    <ChatWindow.Users />
                    <ChatWindow.Messages />
                    <div className="input-container">
                        <input type="text" placeholder="Please enter your message" />
                        <button className="btn btn-primary" type="button">Send</button>
                    </div>
                </div>
            )
        } else {
            return(
                <div><p>Joining, please wait...</p></div>
            )
        }
    }
}
ChatWindow.Title = props =>(
    <h3 className="title">{props.roomName}</h3>
);
ChatWindow.Messages = props => (
    <div className="messages">blee</div>
);
ChatWindow.Users = props => (
    <div className="users">me!</div>
);

const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(ChatWindow);