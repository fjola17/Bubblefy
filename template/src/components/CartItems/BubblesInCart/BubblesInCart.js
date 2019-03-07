import React from 'react';


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
export default Container;