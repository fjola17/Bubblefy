/* Form when user selects the option to get stuff from store */
import React from 'react'
import propTypes from 'prop-types';

const StoreInput = props => {
    const { onInput, type, errorMessage, label, name} = props

    return(
        <div className="form-group">
        {
        label
        ?
        <label  className="control-label">{ label }</label>
        :
        <></>
        }
        <input
        type={ type }

        onChange={ onInput }
        name={ name }
        
        className="form-control" />
        <span className="error">{ errorMessage }</span>
    </div>
    )
}
StoreInput.propTypes = {
    
    name: propTypes.string.isRequired,
  onInput: propTypes.func.isRequired,
  type: propTypes.oneOf([ 'text', 'number', 'password', 'submit', 'email' ]),
  errorMessage: propTypes.string,
  label: propTypes.string
}
export default StoreInput;