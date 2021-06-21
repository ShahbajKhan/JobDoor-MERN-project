import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import Sidebar from '../SideBar/Sidebar';

const MakeAdmin = () => {
    let history = useHistory();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const adminData = {
            email: data.email,
        };
        const url = `http://localhost:5000/addAdmin`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(adminData)
        })
            .then(res => {
                if(res){
                    history.push('/');
                }
            })
    };

    return (
        <div className="row w-100">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-8">
                <div className="text-center formCard bg-light">
                    <h1>Add Admin</h1>
                    <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
                        <input className="userInput form-control" name="email" placeholder="Enter Email" ref={register({ required: true })} /> <br />
                        <input className="btn btn-dark text-warning" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;