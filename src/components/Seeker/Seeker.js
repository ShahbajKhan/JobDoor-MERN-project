import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

const Seeker = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();
    let history = useHistory();
    // Handle job data
    const onSubmit = data => {
        const jobDetail = {
            name: loggedInUser.displayName,
            email: loggedInUser.email,
            address: data.address,
            resume: data.resume,
            degree: data.degree,
            birth:data.birth,
            expectedSalary: data.expectedSalary
        };
        
        fetch('http://localhost:5000/addJobSeeker', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jobDetail)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your Profile Updated');
                    history.push('/')
                }
            })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-light p-5">
            <div className="row">
                <div className="col-md-5 mt-2">
                    <label for="JobTitle">Name:</label>
                    <input name="name" className="form-control" ref={register} defaultValue={loggedInUser.displayName} disabled />
                </div>
                <div className="col-md-5 mt-2">
                    <label for="email">Email:</label>
                    <input name="email" className="form-control" ref={register} defaultValue={loggedInUser.email} disabled />
                </div>
                <div className="col-md-5 mt-2">
                    <label for="address">Enter Address</label>
                    <input name="address" className="form-control" ref={register} placeholder="Enter Address" required />
                </div>
                <div className="col-md-5 mt-2">
                    <label for="resume">Resume</label>
                    <input name="resume" className="form-control" ref={register} placeholder="Enter Resume Link" required />
                </div>
                <div className="col-md-5 mt-2">
                    <label for="degree">Degree</label>
                    <input name="degree" className="form-control " ref={register} placeholder="Enter your degree" required />
                </div>
                <div className="col-md-5 mt-2">
                    <label for="birth">Date of Birth:</label>
                    <input name="birth" type="date" className="form-control" ref={register} placeholder="Date of Birth" required />
                </div>
                <div className="col-md-5 mt-2">
                    <label for="expectedSalary">Expected Salary($):</label>
                    <input name="expectedSalary" type="text" className="form-control" ref={register} placeholder="Salary Range: 100 - 200" required />
                </div>
            </div>
            <input type="submit" className="mt-3 btn btn-success" value="Save" />
        </form>
    );
};

export default Seeker;