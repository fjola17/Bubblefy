import React from 'react';
import validator from 'validator';
import toastr from 'toastr';
import DeliveryForm from '../DeliveryForm/DeliveryForm'
import DeliveryInput from '../DeliveryInput/DeliveryInput'

class Delivery extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            fields: {
                fullName: "",
                address: "",
                city: "",
                telephone: "",
                postalCode: ""
            },
            errors: {
                fullNameError: "",
                addressError: "",
                cityError: "",
                telephoneError: "",
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
        const {fullName, address, city, telephone, postalCode} = this.state.fields;
        const errors = {};
        if (fullName === "") {errors.fullNameError = "Error: Full name is required"}
        if (address === "") {errors.addressError = "Error: Address is required"}
        if (city === "") {errors.cityError = "Error: City is required"}
        if (telephone === "") {errors.telephoneError = "Error: Telephone number is required"}
        if (postalCode === "") {errors.postalCodeError = "Error: Postal code is required"}

        if (Object.keys(errors).length > 0) {
            this.setState({...this.state.errors, errors});
            return false;
        }
        return true;
    }
    submitForm(e){
        e.preventDefault();
        console.log(this.state.fields);
        if(this.validateForm()){
            toastr.success("The order was successfully placed");
        } else {
            toastr.error("Something went wrong")
        }
    }
    render(){
        const {fullName, address, city, telephone, postalCode} = this.state.fields;
        const {fullNameError, addressError, cityError, telephoneError, postalCodeError} = this.state.errors;

        return(
            <DeliveryForm onSubmit={e => this.submitForm(e)}>
                <DeliveryInput type="text" name="fullName" value={ fullName } htmlId="fullName" label="Enter full name" errorMessage={ fullNameError } onInput={e => this.onInput(e)} />
                <DeliveryInput type="text" name="address" value={ address } htmlId="address" label="Enter address" errorMessage={ addressError } onInput={e => this.onInput(e)} />
                <DeliveryInput type="text" name="city" value={ city } htmlId="city" label="Enter city" errorMessage={ cityError } onInput={e => this.onInput(e)} />
                <DeliveryInput type="number" name="telephone" value={ telephone } htmlId="telephone" label="Enter telephone number" errorMessage={ telephoneError } onInput={e => this.onInput(e)} />
                <DeliveryInput type="text" name="postalCode" value={ postalCode } htmlId="postalCode" label="Enter postal code" errorMessage={ postalCodeError } onInput={e => this.onInput(e)} />
                <input type="submit" value="Submit" className="btn btn-primary"/>
            </DeliveryForm>

        )
    }
}
export default Delivery;
