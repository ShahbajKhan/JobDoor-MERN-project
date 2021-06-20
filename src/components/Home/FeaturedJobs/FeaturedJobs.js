import React, { useEffect, useState } from 'react';
import JobView from '../JobView/JobView';
const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/jobs',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        )
            .then(res => res.json())
            .then(data => {
                setJobs(data);
            })
    }, []);
    console.log(jobs);
    return (
        <section className="container my-5">
            <h1 className="text-center">Featured Jobs</h1>
            <div className="row">
                {
                    jobs.map(job => <JobView job={job}></JobView>)
                }
            </div>
        </section>
    );
};

export default FeaturedJobs;