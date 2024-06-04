import React from 'react';
import './Navbar.css';
import logo from './stackline_logo (1).svg'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src = {logo} alt = 'Logo' className='navbar-logo' />
        </nav>
    )
}

export default Navbar;