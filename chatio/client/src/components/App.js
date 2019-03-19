import React from 'react';
import { connect } from 'react-redux';
import ChatWindow from './ChatWindow/ChatWindow';
import SocketContext from '../contexts/SocketContext';

class App extends React.Component{
    componentDidMount(){

        const { socket } = this.context;
       //console.log(socket); 
        socket.on('users', userlist => {
           this._populateUserList(userList);
       });
    }
    _populateUserList(userList){
        this.setState({
            users: userList.map((u, idx) => '`User ${idx + 1}`')
        })
    }
    constructor(props){
        super(props);
        this.state = {
            users: [],
            rooms: {}
        }
    }
    render(){
        console.log(this.state.users);
        const users={users}
        return(
            <div className="container">
            <ChatWindow />
            </div>
        )
    }
}
App.contextType = SocketContext;
export default App;