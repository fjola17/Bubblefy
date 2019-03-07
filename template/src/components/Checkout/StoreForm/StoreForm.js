import React from 'react'

const StoreForm = props =>{
    return(
        <form onSubmit={props.onSubmit} className="form form-horizontal">
            {props.children}
        </form>
    )
}
export default StoreForm;