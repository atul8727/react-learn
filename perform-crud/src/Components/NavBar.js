import React from 'react';
import { NavLink } from "react-router-dom";
import '../App.css';

function NavBar(props) {

    return (
        <div>
            <ul className="navbar">
           <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about/?age=10'>About</NavLink></li>
            <li><NavLink to='/user/a'>User</NavLink></li>
            <li><NavLink to='/user/b'>User</NavLink></li>
            <li><NavLink to='/login'>Login</NavLink></li>
            <li><NavLink to='/form'>Form</NavLink></li>
            <li><NavLink to='/prev'>PREV</NavLink></li>
            </ul>
        </div>
    );
}

export default NavBar;
