import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
//import {updateRoom } from '../actions/RoomActions';
import PrivateMessage from '../PrivateMessage/PrivateMessage';

class UserOps extends React.Component {

    constructor(props){
        super(props);
        this.state={
            listopen: false,
            private: false
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
    getPrivateMsg(e){
        e.preventDefault();
        this.setState({private: true})
    }
    render(){
        let user, ble;
        console.log(this.state.listopen)
        if(this.state.listopen == true){
            user = <div className="userOps">
            <div className="userOps" onClick={e=>this.getPrivateMsg(e)}>Private message</div>
            <div className="userOps">Op</div>
            <div className="userOps">Kick</div>
            <div className="userOps">Ban</div>
        </div>
        }
        else{
            user = <div></div>
        }
        if(this.state.private){
            ble = <PrivateMessage />
        }
        else{
            ble = <></>
        }
        return(
            <div className="dropdown">
                <button className="btn btn-primary" onClick={e=>this.clickMenu(e)}>
                <span className="caret"></span></button>
                {user}
                {ble}
            </div>
        )
    }
}
/*UserOps.propTypes = {
    listopen: propTypes.element.isRequired
}*/
export default UserOps;