import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import JobSeekerView from '../JobSeekerView/JobSeekerView';
import Sidebar from '../SideBar/Sidebar';

const JobSeekers = () => {
    const [jobSeeker, setJobSeeker] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // Retrieve bookings using mail address
    useEffect(() => {
        fetch('http://localhost:5000/viewSeekers', {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => setJobSeeker(data))
    }, []);
    return (

        <section className="row w-100">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-8 mt-5 py-5">
                <h1 className="fw-bolder text-center">List of all Job Seekers</h1>
                <hr />
                <table class="table table-striped table-hover table-responsive-sm">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email ID</th>
                            <th scope="col">Degree</th>
                            <th scope="col">Expected Salary</th>
                        </tr>
                    </thead>
                    {
                        jobSeeker.map(seeker => <JobSeekerView seeker={seeker}></JobSeekerView>)
                    }
                </table>
            </div>
        </section>

    );
};

export default JobSeekers;