import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark">
            <div className="container">
                <div className="d-flex">
                    <h1 className="navbar-brand ">JobDoor</h1>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link to="/home" className="nav-link" style={{cursor:'pointer'}} smooth={true} duration={1000}>Home</Link>
                        <Link to="about" className="nav-link" style={{cursor:'pointer'}} smooth={true} duration={1000}>Jobs</Link>
                        <Link to="/postJob" className="nav-link" style={{cursor:'pointer'}} >Post Job</Link>
                        
                        <Link to="contact" className="nav-link" style={{cursor:'pointer'}} smooth={true} duration={1000}>Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;