import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { SearchContext } from '../Home/Home';
import './TopBanner.css'
const TopBanner = () => {

    const [searchedJobs, setSearchedJobs] = useContext(SearchContext);
    const { register, handleSubmit, watch, errors } = useForm();
    const [otherJob, setOtherJob] = useState([]);
    const onSubmit = data => {
        fetch(`http://localhost:5000/searchQuery/${data.category}/${data.title}/${data.location}`)
            .then(res => res.json())
            .then(data => {
                setSearchedJobs(data);
            })
    };
    
    return (
        <main className="row d-flex align-items-center w-100 mt-3" style={{ height: '100vh' }}>
            <h1 className="fw-bolder text-center text-">Find Your Dream Job</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="">
                <div className="container bg-transparent">
                    <div className="mt-5" >
                        <div className="row  text-white ">

                            <div className="col-md-4">
                                <input name="title" id="jobTitle" className="form-control bg-dark text-white" placeholder="Enter Title" ref={register} />
                            </div>
                            <div className="col-md-3">

                                <input name="location" id="jobLocation" className="form-control bg-dark text-white" placeholder="location" ref={register} />
                            </div>

                            <div className="col-md-3">

                                <select ref={register} name="category" className="form-select bg-dark text-white" >
                                    <option value="IT Engineer">IT / Engineering</option>
                                    <option value="Education">Education</option>
                                    <option value="Agriculture">Agriculture</option>
                                    <option value="Business">Business</option>
                                    <option value="Writing">Writing</option>
                                    <option value="Telecommunications">Telecommunications</option>
                                    <option value="Design & Art">Design and Art</option>
                                </select>
                            </div>
                            <div className="col-md-2 ">
                                <input type="submit" className="btn btn-lg btn-success form-control" value="Search" />
                            </div>
                        </div>

                    </div>




                </div>


            </form>
        </main>
    );
};

export default TopBanner;