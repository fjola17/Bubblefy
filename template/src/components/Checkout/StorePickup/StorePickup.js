import React from 'react'
import validator from 'validator';
import toastr from 'toastr';

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
                [e.target.name] :e.target.value
            }
        })
    };
    validateForm(){
        return true;
    }
    submitForm(e){
        e.preventDefault();
        if(this.validateForm()){
            console.log(this.state.fields);
            toastr.success('Form sucessfully submitted');
        }
        else{
            toastr.error("Error: Form didn't sucessfully submit");
        }
    }
    render(){
        const {fullName, phoneNumber} = this.state.fields;
        const {fullNameError, phoneNumberError} = this.state.errors;
        
        return(
            <div> yee</div>
        )
    }
}
export default StorePickup;