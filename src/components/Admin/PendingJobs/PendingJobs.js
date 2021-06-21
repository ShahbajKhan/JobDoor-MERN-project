import React, { useEffect, useState } from 'react';
import Sidebar from '../SideBar/Sidebar';
import PendingJobsView from './PendingJobsView/PendingJobsView';

const PendingJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('https://fathomless-badlands-44105.herokuapp.com/pendingJobs')
            .then(res => res.json())
            .then(data => {
                setJobs(data);
            })
    }, [])


    return (
            <div className="row w-100">
                
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8">
                    <h1 className="fw-bolder text-center">Pending Jobs</h1>
                    <div className="row">
                        {
                            jobs.map(job => <PendingJobsView job={job}></PendingJobsView>)
                        }
                    </div>
                </div>
            </div>
    );
};

export default PendingJobs;