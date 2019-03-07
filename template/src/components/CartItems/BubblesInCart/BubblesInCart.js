import React from 'react';
import PropTypes from 'prop-types';

const Container = (props) =>{
    var bubbles = Object.keys(props.cartStorage);
    var price = bubbles.splice(bubbles.indexOf("bubbles::price"), 1)

    var pricer = () => {
        if(price !== undefined) {
            return <div className="container">Price: {props.cartStorage[price]}</div>
        }
    }


    return(

        <div>
        {
            bubbles.map( (key) => {
                    return <div className="container">{key.substring("bubbles::".length, key.length)} = {props.cartStorage[key]}</div>
                }
            )
        }
        { pricer() }
        </div>
    )
}
// TODO: Fix this mess

Container.propTypes = {
    cartStorage: PropTypes.objectOf(PropTypes.string)
}
export default Container;
