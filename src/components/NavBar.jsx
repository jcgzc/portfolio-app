import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


function NavBar () {

return(
    <nav>
        {/* <a href="./About.jsx">About</a>
        <a href="./Projects.jsx">Projects</a>
        <a href="./Contact.jsx">Contact</a> */}

        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>

        

    </nav>
    




    );
}

export default NavBar;