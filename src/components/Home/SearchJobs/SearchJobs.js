import React from 'react';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SearchContext } from '../Home/Home';
const SearchJobs = () => {
    const [searchedJobs, setSearchedJobs] = useContext(SearchContext);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch(`https://fathomless-badlands-44105.herokuapp.com/searchQuery/${data.category}/${data.title}/${data.location}`)
            .then(res => res.json())
            .then(data => {
                setSearchedJobs(data);
            })
    };
    return (
        <div>
            <div className='text-center fw-bold'>
                <h5 style={{ color: '#41adb7' }}>700+ Jobs</h5>
                <h2 >Browse Jobs</h2>
            </div>
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
        </div>
    );
};

export default SearchJobs;