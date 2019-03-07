import React from 'react';
import validator from 'validator';
import toastr from "toastr";
import 'toastr/build/toastr.min.css';
import Form from '../Form/Form';
import Input from '../Input/Input';

class StoreDelivery extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            fields: {
                fullName: "",
                address: "",
                city: "",
                phoneNumber: "",
                postalCode: ""
            },
            errors: {
                fullNameError: "",
                addressError: "",
                cityError: "",
                phoneNumberError: "",
                postalCodeError: ""
            }

        };
    }
    onInput(e){
        this.setState({
            fields: {
                ...this.state.fields,
                [e.target.name]: e.target.value
            }
        });
    };
    validateForm(){
        const {fullName, address, city, phoneNumber, postalCode} = this.state.fields;
        const errors = {};
        if (fullName === "") {errors.fullNameError = "Error: Full name is required"}
        if (address === "") {errors.addressError = "Error: Address is required"}
        if (city === "") {errors.cityError = "Error: City is required"}
        if (phoneNumber === "") {errors.phoneNumberError = "Error: Phone number is required"}
        if (postalCode === "") {errors.postalCodeError = "Error: Postal code is required"}

        if (Object.keys(errors).length > 0) {
            this.setState({...this.state.errors, errors});
            return false;
        }
        return true;
    }
    submitForm(e){
        e.preventDefault();

        if(this.validateForm()){

            toastr.success("Form sucessfully submitted", "Success!");
        } else {
            console.log("Wut");
            toastr.error("Error: Form didn't successfully submit", "Failure!")
        }
    }


    render(){
        const {fullName, address, city, phoneNumber, postalCode} = this.state.fields;
        const {fullNameError, addressError, cityError, phoneNumberError, postalCodeError} = this.state.errors;

        return(

            <Form onSubmit={e => this.submitForm(e)}>
                <Input type="text" name="fullName" value={ fullName } htmlId="fullName" label="Enter full name" errorMessage={ fullNameError } onInput={e => this.onInput(e)} />
                <Input type="text" name="address" value={ address } htmlId="address" label="Enter street address" errorMessage={ addressError } onInput={e => this.onInput(e)} />
                <Input type="text" name="city" value={ city } htmlId="city" label="Enter city" errorMessage={ cityError } onInput={e => this.onInput(e)} />
                <Input type="number" name="phoneNumber" value={ phoneNumber } htmlId="phoneNumber" label="Enter phone number" errorMessage={ phoneNumberError } onInput={e => this.onInput(e)} />
                <Input type="text" name="postalCode" value={ postalCode } htmlId="postalCode" label="Enter postal code" errorMessage={ postalCodeError } onInput={e => this.onInput(e)} />
                <input type="submit" value="Proceed" className="btn btn-primary"/>
            </Form>

        )
    }
}
export default StoreDelivery;
