import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import Navbar from '../Shared/Navbar/Navbar';

const CreateJob = (props) => {
    const { type, jobLength } = props;
    const [state, setState] = useState(false)
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();

    useEffect(() => {
        if (type === "Basic" && jobLength < 10) {
            setState(true)
        }
        else if (type === "Standard" && jobLength < 20) {
            setState(true)
        }
        else if (type === "Premium" && jobLength < 30) {
            setState(true)
        }
    }, [jobLength, type]);
    // Handle job data
    const onSubmit = data => {
        const jobDetail = {
            employer: loggedInUser.email,
            category: data.category,
            type: data.type,
            title: data.title,
            location: data.location,
            deadline: data.deadline,
            status: "Pending",
            salary: data.salary
        };

        state === true && fetch('https://fathomless-badlands-44105.herokuapp.com/addNewJob', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jobDetail)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Job added. Wait for admin approval');
                    history.push('/')
                }
            });

        if (state === false) {
            alert("Your job posting limit is over.");
            history.push('/');
        }
    }

    return (
        <div className="">
            <Navbar></Navbar>
            <form onSubmit={handleSubmit(onSubmit)} className="shadow my-5 p-5">
                <h1 className="fw-bolder text-dark text-center">Post a Job</h1>
                <hr />
                <div className="row d-flex fw-bolder">
                    <div className="col-md-6">
                        <label className="">Please Select a Job Category: </label>
                        <select ref={register} name="category" className="form-select">
                            <option value="IT Engineer">IT / Engineering</option>
                            <option value="Education">Education</option>
                            <option value="Agriculture">Agriculture</option>
                            <option value="Business">Business</option>
                            <option value="Writing">Writing</option>
                            <option value="Telecommunications">Telecommunication</option>
                            <option value="Design & Art">Design and Art</option>
                        </select>
                    </div>
                    <div className="col-md-6 mt-2">
                        <label for="JobTitle">Job Title</label>
                        <input name="title" className="form-control" ref={register} placeholder="Enter title" required />
                    </div>
                    <div className="col-md-6 mt-2">
                        <label for="JobLocation">Job Location</label>
                        <input name="location" className="form-control" ref={register} placeholder="Enter location" required />
                    </div>
                    <div className="col-md-6 mt-2">
                        <label for="JobType">Job Type</label>
                        <input name="type" className="form-control " ref={register} placeholder="Job type" required />
                    </div>
                    <div className="col-md-6 mt-2">
                        <label for="Deadline">Deadline:</label>
                        <input name="deadline" type="date" className="form-control" ref={register} placeholder="Application Deadline" required />
                    </div>
                    <div className="col-md-6 mt-2">
                        <label for="Salary">Salary($):</label>
                        <input name="salary" type="text" className="form-control" ref={register} placeholder="Salary Range: 100 - 200" required />
                    </div>
                    <div className="col-md-6 mt-2">
                        <label for="Salary">Job Description:</label>
                        <input name="description" type="text" className="form-control" ref={register} placeholder="Enter Job Description" required />
                    </div>
                </div>
                <input type="submit" className="mt-3 btn btn-lg btn-danger" value="Post" />
            </form>
        </div>
    );
};

export default CreateJob;