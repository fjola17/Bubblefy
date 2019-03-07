import React from 'react';

const DeliveryForm = props => {
    return (
        <form onSubmit={props.onSubmit} className="form form-horizontal">
            {props.children}
        </form>
    )
};

export default DeliveryForm;
