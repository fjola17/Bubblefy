import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
//import {updateRoom } from '../actions/RoomActions';
import { connect } from 'react-redux';
import { socket } from '../../services/socketService';
import PrivateMessage from '../PrivateMessage/PrivateMessage';
import toastr from 'toastr';

class UserOps extends React.Component {
    constructor(props){
        super(props);
        this.state={
            listopen: false,
            private: false,
        }
        this.clickMenu = this.clickMenu.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.getPrivateMsg = this.getPrivateMsg.bind(this);
    }
    handleClickOutside(e){
        if(!ReactDOM.findDOMNode(this).contains(e.target)){
            this.setState({listopen: false})
        }
    }
    clickMenu(e){
        e.preventDefault();
        if(this.state.listopen === false){
            this.setState({listopen: true})
        }
        else{
            this.setState({listopen: false})
        }  
    }
    componentDidMount(){
        document.addEventListener("click", this.handleClickOutside, false);
    }
    componentWillUnmount(){
        document.removeEventListener("click", this.handleClickOutside, false);
    }

    kickUser(userName, roomName) {
        socket.emit('kick', { user: userName, room: roomName }, (response) => {
            if (response) {
                //Alert or toastr success?
            }
        });
    }

    banUser(userName, roomName) {
        socket.emit('ban', { user: userName, room: roomName }, (response) => {
            if (response) {
                toastr.success('Ban successful', 'Success');
            } else {
                toastr.error('Ban failed', 'Error');
            }
        });
    }

    opUser(userName, roomName) {
        socket.emit('op', { user: userName, room: roomName }, (response) => {
            if (response) {
                toastr.success('User opped', 'Success');
            } else {
                toastr.error('Op failed', 'Error');
            }
        })
    }

    getPrivateMsg(e){
        e.preventDefault();
        this.setState({private: !this.state.private})

    }
    render(){
        let user, pmsg;
        const { userName, roomName } = this.props;
        const senderName = this.props.user.userName;

        const actions = () => {
            if(this.props.op) {
                return (<>
                <div className="userOps" onClick={e=>this.getPrivateMsg(e)}>Private message</div>
                <div className="userOps" onClick={() => this.opUser(userName, roomName)}>Op</div>
                <div className="userOps" onClick={() => this.kickUser(userName, roomName)}>Kick</div>
                <div className="userOps" onClick={() => this.banUser(userName, roomName)}>Ban</div>
                </>)
            } else {
                return <div className="userOps" onClick={e=>this.getPrivateMsg(e)}>Private message</div>
            }
        }

        if(this.state.listopen == true){
            user = <div className="userOps">
                { actions() }
            </div>
        }
        else{
            user = <div></div>
        }
        if(this.state.private){
            pmsg = <PrivateMessage nick={userName} />
        }
        else{
            pmsg = <></>
        }
        return(
            <div className="dropdown">
                <button className="btn btn-primary" onClick={e=>this.clickMenu(e)}>
                <span className="caret"></span></button>
                {user}
                {pmsg}
            </div>
        )
    }
}
UserOps.propTypes = {
    op: PropTypes.bool.isRequired,  // If true then op actions are also displayed
                                    // Holds true for normal users from op perspective
    roomName: PropTypes.string.isRequired,  // Name of room that hosts user ops
                                            // Needed for socket context for actions(ban/kick/etc)
    userName: PropTypes.string.isRequired,  // Name of user that is being clicked on
                                            // Needed for socket context for actions
}
const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(UserOps);