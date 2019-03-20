import React from 'react';
import ChatWindow from './ChatWindow/ChatWindow';
import SocketContext from '../contexts/SocketContext';
import UserName from './UserName/UserName';

class App extends React.Component{
    componentDidMount(){

        const { socket } = this.context;
    socket.on('users', userList =>{
        this._populateUserList(userList);
    });
    socket.on('rooms', roomList =>{
        this._populateRooms(roomList);
    })
 }
 _populateRooms(roomList){
     this.setState({
         rooms: roomList.map((r, id) => r)
     })
 }
 _populateUserList(userList){
     this.setState({
         users: userList.map((u, idx) => u)
     })
 }
    
    constructor(props){
        super(props);
        this.state = {
            users: [],
            rooms: []
        }
    }
    render(){
        const users={users}
        const rooms={rooms}
        console.log(rooms);
        console.log(users);
        return(
            <div className="container">
            <UserName />
            </div>
        )
    }
}
App.contextType = SocketContext;
export default App;