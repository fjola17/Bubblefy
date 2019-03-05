import React from 'react';
import NavLinks from '../NavLinks/NavLinks'

const Navbar = () =>{
    return(        
        <nav className="navbar navbar-expand-lg">
            <h2>Bubblefy</h2>
            <NavLinks />
        </nav>

    )
}
export default Navbar;