import React, { useEffect, useState } from 'react';
import PendingJobsView from './PendingJobsView/PendingJobsView';

const PendingJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/pendingJobs',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        )
            .then(res => res.json())
            .then(data => {
                setJobs(data.reverse());
            })
    }, []);

    return (
        <section className="container my-5">
            <h1 className="text-center">Featured Jobs</h1>
            <div className="row">
                {
                    jobs.map(job => <PendingJobsView job={job}></PendingJobsView>)
                }
            </div>
        </section>
    );
};

export default PendingJobs;