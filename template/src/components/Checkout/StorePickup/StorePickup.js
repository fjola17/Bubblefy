import React from 'react'
import validator from 'validator';
import toastr from 'toastr';
import StoreForm from '../StoreForm/StoreForm';

class StorePickup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fields:{
                fullName : '',
                phoneNumber: ''
            },
            errors:{
                fullNameError: '',
                phoneNumberError: ''
            }
        }
    }
    onInput(e){
        this.setState({
            fields:{
                ...this.state.fields,
                [e.target.name] : e.target.value
            }
        })
    };
    validateForm(){
        const {fullName, phoneNumber} = this.state.fields;
        const errors = {}
        if(fullName === ""){
            errors.fullNameError = "Full name is required";
        }
        if(phoneNumber === ""){
            errors.phoneNumberError = "phone number is required";
        }
        if(Object.keys(errors).length > 0){
            this.setState({...this.state.errors, errors});
            return false;
        }
        return true;
    }
    submitForm(e){
        e.preventDefault();
        if(this.validateForm()){
            console.log(this.state.fields);
            toastr.success('Form sucessfully submitted');
        }
        else{
            console.log("I failed");
            toastr.error("Error: Form didn't sucessfully submit");
        }
    }
    render(){
        const {fullName, phoneNumber} = this.state.fields;
        const {fullNameError, phoneNumberError} = this.state.errors;

        return(
            <StoreForm onSubmit={e => this.submitForm(e)}>
            <div>Name: <input className="form-control" type="text" name="fullName" htmlid="fullName" label="enter full name" placeholder="enter your name" errormessage={fullNameError} onInput={e=>this.onInput(e)} /></div>
            <div>Phone number: <input type="number" className="form-control" name="phoneNumber" htmlid="phoneNumber" label="enter your phone number" placeholder="enter your phonenumber" errormessage={phoneNumberError} onInput = {e=>this.onInput(e)} /></div>
            <input type="submit" value="Proceed" className="btn btn-primary"/>
            </StoreForm>
        )
    }
}
export default StorePickup;