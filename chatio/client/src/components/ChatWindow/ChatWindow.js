import React from 'react'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {socket} from '../../services/socketService';
import UserName from '../UserName/UserName';
import './chatWindow.css';

class ChatWindow extends React.Component {
    activateListeners() {
        const { RoomName } = this.props.match.params;
        socket.on('updateusers',(room,users,ops) => {
            if(Object.keys(users).indexOf(this.props.user.userName) == -1 && 
                Object.keys(ops).indexOf(this.props.user.userName) == -1) {
                this.setState({kicked: true})
            }
            if(room == RoomName) {
                this.setState({users: Object.keys(users), ops: Object.keys(ops)});
            }
        });

        socket.on('updatechat',(roomName,messageHistory) => {
            if(roomName===this.state.roomName) {
                this.setState({messages: messageHistory});
            }
        });

    }

    componentDidMount(props) {
        const {RoomName}=this.props.match.params;
        if(this.props.user.userName!=="") {
            this.activateListeners();
            socket.emit('joinroom',{room: RoomName},(response,reason) => {
                if(response) {
                    this.setState({roomJoined: true, roomName: RoomName});
                } else {
                    alert(`Couldn't join room because: ${reason}`);
                }
            });
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
            users: [],
            ops: [],
            redirect: false,
            kicked: false,
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

    kickUser(e) {
        const userName=e.target.id;
        const roomName=e.target.name;
        socket.emit('kick',{user: userName,room: roomName},(response) => {
            if(response) {
                //Alert or toastr success?
            }
        })
    }

    render() {
        const {roomJoined,roomName,messages,redirect,users,kicked,ops}=this.state;

        if(redirect||kicked) {
            return (
                <Redirect to="/" />
            )
        }

        if(roomJoined) {
            return (
                <div className="chat-window">
                    <ChatWindow.Title roomName={roomName} />
                    <div className="users">
                        <ChatWindow.Ops ops={ops} />
                        <ChatWindow.Users users={users} roomName={roomName} kickFunc={this.kickUser} />
                    </div>
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

ChatWindow.Ops=props => (
    props.ops.map(op => <div className="user op" key={op}>{op}</div>)
);

ChatWindow.Users=props => (
    props.users.map(user => <div className="user" key={user}>{user} <a href="#" id={user} name={props.roomName} onClick={e => props.kickFunc(e)}>KICK</a></div>)
);

const mapStateToProps=(reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(ChatWindow);