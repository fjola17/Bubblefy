import React from 'react';
import {socket} from '../../services/socketService';
import {connect} from 'react-redux';
import toastr from 'toastr';
import PropTypes from 'prop-types';

class PrivateMessage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            message: "",
        }
    }
    onInput(e){
        this.setState({[e.target.name]: e.target.value});
    }
    sendMessage(e){
        if (this.state.message !== ''){
            socket.emit("privatemsg", {nick: this.props.nick, message: this.state.message}, (response) => {
                if(response) {
                    toastr.success("Message sent successfully", "Success");
                } else {
                    console.log(this.props)
                    toastr.error("Could not send message. Perhaps user went offline?", "Error");
                }
            });
            this.setState({message: ""});
        }
        else{
            toastr.error('Message must not be empty', "Error");
        }
    }
    render(){
        let {messages} = this.state;
        return(
            <div className="private-chat">
        <p className="user">
            {this.props.nick}
        </p>
        <div className="msg-input">
            <input type="text" name="message" value={this.state.message} onChange={e => this.onInput(e)} placeholder="Please enter your message" />
            <button className="btn btn-primary" onClick={e => this.sendMessage(e)} type="button">Send</button>
        </div>
    </div>
        )
    }
}

PrivateMessage.propTypes = {
    nick: PropTypes.string.isrequired        //The receiver name for the private message
}

const mapStateToProps=(reduxState) => {
    return reduxState;
}
export default connect(mapStateToProps)(PrivateMessage);