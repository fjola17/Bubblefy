import React from 'react';
import {socket} from '../../services/socketService';
import {connect} from 'react-redux';

class PrivateMessage extends React.Component{
    componentDidMount(){
       const {userName} = "bla";
       this.setState({nick: userName});
    }
    activateLitseners(){
         
      /* socket.on("recv_privatemsg", (this.state.user, message) =>{
            if(user2 ===this.state.user){
                console.log("i work!!");
            }
        })*/
    }
    constructor(props){
        super(props);
        this.state={
            msgObj: [],
            message: "",
            nick: '',
        }
    }
    onInput(e){
        this.setState({[e.target.name]: e.target.value});
    }
    sendMessage(e){
        console.log(this.state.message)
        console.log(this.state.nick)
   
        if (this.state.message !== '' && this.state.nick !== ''){
           // socket.emit("privatemsg", {nick: this.state.nick, message: this.state.message});
            this.setState({message: ""});
        }
        else{
            console.log("I couldn't send")
        }
    }
    render(){
        let {messages} = this.state;
        return(
            <div className="private-chat">
        <p className="user">
            {this.state.nick}
        </p>
        <div className="msg-input">
            <input type="text" name="message" value={this.state.message} onChange={e => this.onInput(e)} placeholder="Please enter your message" />
            <button className="btn btn-primary" onClick={e => this.sendMessage(e)} type="button">Send</button>
        </div>
    </div>
        )
    }
}

const mapStateToProps=(reduxState) => {
    return reduxState;
}
export default connect(mapStateToProps)(PrivateMessage);