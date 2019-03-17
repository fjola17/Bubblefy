import React from 'react';
import Input from '../Input/Input';
import PropTypes from 'prop-types';

const Form = props => {
    return (
        <form onSubmit={props.onSubmit} className="form form-horizontal">
            {props.children}
        </form>
    )
};

Form.propTypes = {
    //onSubmit function to check validation and send data
    onSubmit: PropTypes.func.isRequired,
    //Array of Input
    children: PropTypes.array.isRequired
}

export default Form;
