import React from 'react'
import validator from 'validator';
import toastr from 'toastr';
import StoreForm from '../StoreForm/StoreForm';
import StoreInput from '../StoreInput/StoreInput';

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
            errors.fullNameError = "Error: Full name is required!";
        }
        if(phoneNumber === ""){
            errors.phoneNumberError = "Error: Phone number is required";
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
            <StoreInput type="text" name="fullName"  label="enter full name" errorMessage={fullNameError} onInput={e=>this.onInput(e)} />
            <StoreInput type="number" name="phoneNumber"  label="enter your phone number" errorMessage={phoneNumberError} onInput = {e=>this.onInput(e)} />
            <input type="submit" value="Proceed" className="btn btn-primary"/>
            </StoreForm>
        )
    }
}
export default StorePickup;