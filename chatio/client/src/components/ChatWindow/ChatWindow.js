import React from 'react'
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {socket} from '../../services/socketService';
import UserName from '../UserName/UserName';
import './chatWindow.css';

class ChatWindow extends React.Component {
    componentDidMount(props) {
        const {RoomName}=this.props.match.params;
        if(this.props.user.userName !== "") {
            socket.emit('joinroom',{room: RoomName},(response,reason) => {
                if(response) {
                    this.setState({roomJoined: true});
                } else {
                    alert(`Couldn't join room because: ${reason}`);
                }
            });
            socket.on('updatechat',(roomName,messageHistory) => {
                if(roomName===this.state.roomName) {
                    this.setState({messages: messageHistory});
                }
            })
            this.setState({roomName: this.props.match.params.RoomName})
        } else {
            this.setState({redirect: true})
        }
    }
    constructor(props) {
        super(props)
        this.state={
            roomName: "",
            roomJoined: false,
            message: "",
            messages: [],
            redirect: false
        }
    }

    sendMessage(keycode=13) {
        if(this.state.message!==''&&keycode==13) {
            socket.emit('sendmsg',{roomName: this.state.roomName,msg: this.state.message});
            this.setState({message: ""});
        }
    }

    onInput(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const {roomJoined,roomName,messages, redirect}=this.state;

        if(redirect) {
            return (
                <Redirect to="/" />
            )
        }

        if(roomJoined) {
            return (
                <div className="chat-window">
                    <ChatWindow.Title roomName={roomName} />
                    <ChatWindow.Users />
                    <ChatWindow.Messages messages={messages} />
                    <div className="input-container">
                        <input type="text" name="message" value={this.state.message} onChange={e => this.onInput(e)} onKeyDown={e => this.sendMessage(e.keyCode)} placeholder="Please enter your message" />
                        <button className="btn btn-primary" onClick={() => this.sendMessage()} type="button">Send</button>
                    </div>
                </div>
            )
        } else {
            return (
                <div><p>Joining, please wait...</p></div>
            )
        }
    }
}
ChatWindow.Title=props => (
    <h3 className="title">{props.roomName}</h3>
);
ChatWindow.Messages=props => (
    props.messages.map(msg => <div key={msg.timestamp} className="messages">{msg.nick}: {msg.message}</div>)
);
ChatWindow.Users=props => (
    <div className="users">me!</div>
);

const mapStateToProps=(reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(ChatWindow);