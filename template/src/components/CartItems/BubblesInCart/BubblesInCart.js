import React from 'react';
import PropTypes from 'prop-types';

const Container = (props) =>{
    var bubbles = Object.keys(props.cartStorage);
    console.log(props.cartStorage);
    return(

        <div>
        {
            bubbles.map( (key) => {
                    return <div className="container">{key.substring("bubbles::".length, key.length)} = {props.cartStorage[key]}</div>
                }
            )
        }
        </div>
    )
}
// TODO: Fix this mess

Container.propTypes = {
    cartStorage: PropTypes.objectOf(PropTypes.string).isRequired
}
export default Container;
