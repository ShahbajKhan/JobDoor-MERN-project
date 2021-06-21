import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

const CreateJob = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();

    // Handle job data
    const onSubmit = data => {
        const jobDetail = {
            category: data.category,
            type: data.type,
            title: data.title,
            location: data.location,
            deadline: data.deadline,
            status:"Pending",
            salary: data.salary
        };
        
        fetch('http://localhost:5000/addNewJob', {
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
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-light p-5">
                <div className="row d-flex">
                    <div className="col-md-12">
                        <label className="">Please Select a Job Category: </label>
                        <select ref={register} name="category" >
                            <option value="IT Engineer">IT / Engineering</option>
                            <option value="Education">Education</option>
                            <option value="Agriculture">Agriculture</option>
                            <option value="Business">Business</option>
                            <option value="Writing">Writing</option>
                            <option value="Telecommunications">Telecommunication</option>
                            <option value="Design & Art">Design and Art</option>
                        </select>
                    </div>
                    <div className="col-md-5 mt-2">
                        <label for="JobTitle">Job Title</label>
                        <input name="title" className="form-control" ref={register} placeholder="Enter title" required/>
                    </div>
                    <div className="col-md-5 mt-2">
                        <label for="JobLocation">Job Location</label>
                        <input name="location" className="form-control" ref={register} placeholder="Enter location" required/>
                    </div>
                    <div className="col-md-5 mt-2">
                        <label for="JobType">Job Type</label>
                        <input name="type" className="form-control " ref={register} placeholder="Job type" required/>
                    </div>
                    <div className="col-md-5 mt-2">
                        <label for="Deadline">Deadline:</label>
                        <input name="deadline" type="date" className="form-control" ref={register} placeholder="Application Deadline" required/>
                    </div>
                    <div className="col-md-5 mt-2">
                        <label for="Salary">Salary($):</label>
                        <input name="salary" type="text" className="form-control" ref={register} placeholder="Salary Range: 100 - 200" required/>
                    </div>
                    <div className="col-md-5 mt-2">
                        <label for="Salary">Job Description:</label>
                        <input name="description" type="text" className="form-control" ref={register} placeholder="Enter Job Description" required/>
                    </div>
                </div>
                <input type="submit" className="mt-3 btn btn-lg btn-success" value="Post" />
            </form>
        </div>
    );
};

export default CreateJob;