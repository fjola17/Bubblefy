//componment which makes the person with ops being able to edit the room
import React from 'react'
import { socket } from '../../services/socketService';

class EditRoom extends React.Component{
    componentDidMount(props){
        const {RoomName} = this.props;
        
    }
    constructor(props){
        super(props);
        this.state = {
            seeForm: false
        }
        
    }
    formDisplay(e){
        if(this.state.seeForm === false){
            this.setState({seeForm: true});
        }
        else{
            this.setState({seeForm: false});
        }
    }
    onInput(e){
        //this.setState({[e.target.name]: e.target.value})
    }
    submitForm(e){
        e.preventDefault();
        
    }
    render(){
        let roomForm;
        if(this.state.seeForm){
            roomForm = <form action="submit">
                    <input type="text" name="room-topic" placeholder="Please put a topic for your room"/>
                    <input type="text" name="room-password" placeholder="enter your room password"/>
                    <button type="submit" className="btn btn-warning" onClick={e=>this.submitForm(e)}>Confirm</button>
                </form>
        }
        return(
            <div>
                <div className="btn btn-primary" onClick={e=>this.formDisplay(e)}>Edit room</div>
                {roomForm}
            </div>
        )
    }
}
export default EditRoom;