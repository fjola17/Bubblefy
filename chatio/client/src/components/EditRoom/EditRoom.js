//componment which makes the person with ops being able to edit the room
import React from 'react'
import { socket } from '../../services/socketService';

class RoomCreator extends React.Component{
    componentDidMount(props){
        const {RoomName} = this.props;
       // socket.on()
    }
    constructor(props){
        super(props);
      /*  this.state = {
            roomname
        }*/
    }
    onInput(e){
        //this.setState({[e.target.name]: e.target.value})
    }
    onFormSubmit(e){
        e.preventDefault();
        
    }
    render(){
        return(
            <form action="submit">
                <input type="text" name="room-topic" placeholder="Please put a topic for your room"/>
                <input type="text" name="room-password" placeholder="enter your room password"/>
            </form>
        )
    }
}
