import React from 'react'
import UserName from '../UserName/UserName';
import './chatWindow.css';

class ChatWindow extends React.Component{
    componentDidMount(props){

    }
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="chat-window">
                <UserName />
                <ChatWindow.Title />
                <ChatWindow.Users />
                <ChatWindow.Messages />
                <div className="input-container">
                    <input type="text" placeholder="Please enter your message" />
                    <button className="btn btn-primary" type="button">Send</button>
                </div>
            </div>
        )
    }
}
ChatWindow.Title = () =>(
    <h3 className="title">Club penguin</h3>
);
ChatWindow.Messages = props => (
    <div className="messages">blee</div>
);
ChatWindow.Users = props => (
    <div className="users">me!</div>
)
export default ChatWindow;