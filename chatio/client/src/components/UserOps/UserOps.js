import React from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';

class UserOps extends React.Component {

    constructor(){
        super();
        this.state={
            listopen: false
        }
        this.clickMenu = this.clickMenu.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
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
    render(){
        let user;
        console.log(this.state.listopen)
        if(this.state.listopen == true){
            user = <div className="userOps">
            <div className="userOps">Private message</div>
            <div className="userOps">Op</div>
            <div className="userOps">Kick</div>
            <div className="userOps">Ban</div>
        </div>
        }
        else{
            user = <div></div>
        }
        return(
            <div className="dropdown">
                <button className="btn btn-primary" onClick={e => this.clickMenu(e)}>
                <span className="caret"></span></button>
                {user}
            </div>
        )
    }
}
/*UserOps.propTypes = {
    listopen: propTypes.element.isRequired
}*/
export default UserOps;