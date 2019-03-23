import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { socket } from '../../services/socketService';
import './chatWindow.css';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
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
        console.log("Chatwindow:");
        console.log(this.props);
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
                    <button className="btn btn-danger button-config" onClick={e=> this.goBack(e)}>X</button>
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
    props.ops.map(op => <div className="user op" key={op}>{op} <UserOps op={false} roomName={props.roomName} userName={op} /> </div>)
);

ChatWindow.OptionableUsers = props => (
    props.users.map(user => <div className="user" key={user}>{user} <UserOps op={true} roomName={props.roomName} userName={user} /></div>)
);

ChatWindow.Users = props => (
    props.users.map(user => <div className="user" key={user}>{user} <UserOps op={false} roomName={props.roomName} userName={user} /></div>)
)

const mapStateToProps = (reduxState) => {
    return reduxState;
}

//No props received except user from redux
export default connect(mapStateToProps)(ChatWindow);