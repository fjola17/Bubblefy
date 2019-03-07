import React from 'react'
import validator from 'validator';
import toastr from "toastr";
import Form from '../Form/Form';
import Input from '../Input/Input';
import { Redirect  } from 'react-router-dom';
import 'toastr/build/toastr.min.css';
import { apiput } from '../../../services/ApiFetcher';
import { marshallStorage, unmarshallStorage } from '../../../services/Storage';

class StorePickup extends React.Component{
    constructor(){
        super();
        this.state = {
            fields:{
                fullName : '',
                phoneNumber: ''
            },
            errors:{
                fullNameError: '',
                phoneNumberError: ''
            },
            redirect: false
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
        if(fullName === ""){errors.fullNameError = "Error: Full name is required";}
        if(phoneNumber === ""){errors.phoneNumberError = "Error: Phone number is required";}

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
            var order = {
                fields: this.state.fields,
                bubbles: JSON.parse(marshallStorage())
            }

            apiput(this.state.fields.phoneNumber, JSON.stringify(order))
            unmarshallStorage("{}") //empties local storage of only bubble related items
            toastr.success("Form sucessfully submitted", "Success!");
            this.setState({redirect: true})
        }
        else{
            console.log("I failed");
            toastr.error("Error: Form didn't successfully submit", "Failure!");
        }
    }
    renderRedirect(){
        if (this.state.redirect) {
            return <Redirect to='/Success' />
        }
    }
    render(){
        const {fullName, phoneNumber} = this.state.fields;
        const {fullNameError, phoneNumberError} = this.state.errors;

        return(
            <Form onSubmit={e => this.submitForm(e)}>
                <Input type="text" name="fullName" value={ fullName } htmlId="fullName" label="Enter full name" errorMessage={fullNameError} onInput={e=>this.onInput(e)} />
                <Input type="number" name="phoneNumber" value={ phoneNumber } htmlId="phoneNumber" label="Enter your phone number" errorMessage={phoneNumberError} onInput = {e=>this.onInput(e)} />
                <input type="submit" value="Proceed" className="btn btn-primary"/>
                {this.renderRedirect()}
            </Form>
        )
    }
}
export default StorePickup;
