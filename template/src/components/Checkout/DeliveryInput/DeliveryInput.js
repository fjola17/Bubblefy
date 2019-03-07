import React from 'react';
import propTypes from 'prop-types';

const DeliveryInput = props => {
    const { value, onInput, type, errorMessage, label, name, htmlId} = props;
    return (
        <div className="form-group">
            {
                label
                ?
                <label htmlFor={ htmlId } className="control-label">{ label }</label>
                :
                <></>
            }
            <input
                type={ type }
                value={ value }
                onChange={ onInput }
                name={ name }
                id={ htmlId }
                className="form-control" />
            <span className="error">{ errorMessage }</span>
      </div>
    );
};

DeliveryInput.propTypes = {
  /* The value provided to the input HTML tag */
  value: propTypes.string.isRequired,
  htmlId: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  onInput: propTypes.func.isRequired,
  type: propTypes.oneOf([ 'text', 'number', 'submit' ]),
  errorMessage: propTypes.string,
  label: propTypes.string
};

export default DeliveryInput;
