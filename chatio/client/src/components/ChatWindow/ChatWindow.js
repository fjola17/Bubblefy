import React from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { socket } from '../../services/socketService';
import UserName from '../UserName/UserName';
import './chatWindow.css';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import PropTypes from 'prop-types';
import UserOps from '../UserOps/UserOps';


class ChatWindow extends React.Component {
    activateListeners() {
        const { RoomName } = this.props.match.params;
        socket.on('updateusers', (room, users, ops) => {
            if (room == RoomName) {
                if (Object.keys(users).indexOf(this.props.user.userName) == -1 &&
                    Object.keys(ops).indexOf(this.props.user.userName) == -1) {
                    this.setState({ kickOrBan: true })
                }

                this.setState({ users: Object.keys(users), ops: Object.keys(ops) });
            }
        });

        socket.on('updatechat', (roomName, messageHistory) => {
            if (roomName === this.state.roomName) {
                this.setState({ messages: messageHistory });
            }
        });

    }

    componentDidMount(props) {
        const { RoomName } = this.props.match.params;
        if (this.props.user.userName !== "") {
            this.activateListeners();
            socket.emit('joinroom', { room: RoomName }, (response, reason) => {
                if (response) {
                    this.setState({ roomJoined: true, roomName: RoomName });
                } else {
                    alert(`Couldn't join room because: ${reason}`);
                    this.setState({ kickOrBan: true })
                }
            });
        } else {
            this.setState({ redirect: true })
        }
    }
    componentWillUnmount(){
        const { RoomName } = this.props.match.params;
        socket.emit('partroom', RoomName);
    }

    constructor(props) {
        super(props)
        this.state = {
            roomName: "",
            roomJoined: false,
            message: "",
            messages: [],
            users: [],
            ops: [],
            redirect: false,
            kickOrBan: false,
        }
    }

    sendMessage(keycode = 13) {
        if (this.state.message !== '' && keycode == 13) {
            socket.emit('sendmsg', { roomName: this.state.roomName, msg: this.state.message });
            this.setState({ message: "" });
        }
    }

    onInput(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    kickUser(e) {
        const userName = e.target.id;
        const roomName = e.target.name;
        socket.emit('kick', { user: userName, room: roomName }, (response) => {
            if (response) {
                //Alert or toastr success?
            }
        });
    }

    banUser(e) {
        const userName = e.target.id;
        const roomName = e.target.name;
        socket.emit('ban', { user: userName, room: roomName }, (response) => {
            if (response) {

            }
        });
    }
    goBack(e){
        alert("You have left the room");
        this.setState({redirect: true})
    }
    render() {
        const { roomJoined, roomName, messages, redirect, users, kickOrBan, ops } = this.state;
        const { userName } = this.props.user;
        let normalUserDisplay = (opStatus) => {
            if (opStatus) {
                return <ChatWindow.OptionableUsers users={users} roomName={roomName} kickFunc={this.kickUser} banFunc={this.banUser} />
            } else {
                return <ChatWindow.Users users={users} roomName={roomName} />
            }
        }

        if (redirect || kickOrBan) {
            if(kickOrBan){
                toastr.error("You've been kicked or banned!", "Kick or Ban");
            }
            return (
                <Redirect to="/" />
            )
        }
        if (roomJoined) {
            return (
                <div className="chat-window">
                    <button className="btn btn primary" onClick={e=> this.goBack(e)}>X</button>
                    <ChatWindow.Title roomName={roomName} />
                    <div className="users">
                        <ChatWindow.Ops ops={ops} />
                        {normalUserDisplay(ops.indexOf(userName) !== -1)}
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
ChatWindow.Title = props => (
    <h3 className="title">{props.roomName}</h3>
);

ChatWindow.Messages = props => (
    props.messages.map(msg => <div key={msg.timestamp} className="messages">{msg.nick}: {msg.message}</div>)
);

ChatWindow.Ops = props => (
    props.ops.map(op => <div className="user op" key={op}>{op}</div>)
);

ChatWindow.OptionableUsers = props => (
    props.users.map(user => <div className="user" key={user}>{user} <a href="#" id={user} name={props.roomName} onClick={e => props.kickFunc(e)}>KICK</a>  <a href="#" id={user} name={props.roomName} onClick={e => props.banFunc(e)}> | BAN</a></div>)
);

ChatWindow.Users = props => (
    props.users.map(user => <div className="user" key={user}>{user}</div>)
)

const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(ChatWindow);
