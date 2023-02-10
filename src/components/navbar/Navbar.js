import React from 'react'
import "./Navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className='Nav'>
            <div className='nav'>
                <div className='nav-title'>
                    <h2>E-Commerce</h2>
                    <h3><Link to="/" className='nav-home'>Home</Link></h3>
                </div>
                <div className='nav-right'>
                    <p><Link to="/cart"><FaShoppingCart size="1.75rem" color='white' style={{ cursor: 'pointer' }} /></Link></p>
                    <h4>User Name</h4>
                </div>
            </div>
        </div>
    )
}

export default Navbar;