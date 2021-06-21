import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import firebase from "firebase/app";
import "firebase/auth";

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const verifyEmail = loggedInUser.email;

    // Check Admin
    useEffect(() => {
        fetch(`https://fathomless-badlands-44105.herokuapp.com/adminCheck/${verifyEmail}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {

                if (data) {
                    setIsAdmin(true);
                }
                else {
                    setIsAdmin(false)
                }

            })
    }, [verifyEmail]);
    // Implement Logout
    const signOut = () => {

        firebase.auth().signOut().then(res => {
            const signedOutUser = {
                isSignedIn: false,
                name: '',
                photo: '',
                email: '',
                error: '',
                success: false
            }
            setLoggedInUser(signedOutUser);
            setIsAdmin(false);
            sessionStorage.setItem('token', '');
        }).catch(err => {

            console.log(err.message)
        })
    };

    const name = loggedInUser.displayName;
    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark">
            <div className="container">
                <div className="d-flex">
                    <Link to="/" style={{textDecoration:'none'}}><h1 className="navbar-brand ">JobDoor</h1></Link>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link to="/" className="nav-link" style={{ cursor: 'pointer' }} >Home</Link>
                        {
                            isAdmin && <Link to="/admin/addAdmin" className="nav-link" style={{ cursor: 'pointer' }} >Admin</Link>
                        }

                        <Link to="/postJob" className="nav-link" style={{ cursor: 'pointer' }} >Post Job</Link>
                        <Link to="/jobSeeker" className="nav-link" style={{ cursor: 'pointer' }} >Seeker Account</Link>

                        {
                            loggedInUser.email ? <button className="btn btn-warning me-2" onClick={signOut}>Log Out</button> : <Link to="/login" className="btn btn-success">Login</Link>
                        }
                        {
                            name && <button className="btn btn-success">{name}</button>
                        }

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;