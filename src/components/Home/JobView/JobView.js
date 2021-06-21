import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
const JobView = (props) => {
    const { category, type, title, location, deadline, description, salary, status } = props.job;

    return (
        <div className="mb-5 col-lg-4 col-sm-6  text-dark" >
            {
                status === "Approved" && <div className="card shadow-lg w-100 h-100 text-center rounded " style={{ backgroundColor: '#191919' }}>
                <div className="d-flex justify-content-center align-items-center p-2">
                    <FontAwesomeIcon icon={faBriefcase} style={{ height: '50px', width: '50px', color: 'white' }}></FontAwesomeIcon>
                </div>
                <div className="card-body">
                    <h3 className="card-title fw-bolder text-white">{title}</h3>
                    <div className="text-secondary fw-bolder">
                        
                        <p>Category: {category}</p>
                        <p>Nature: {type}</p>
                        <p>Location: {location}</p>
                        <p>Deadline: {deadline}</p>

                    </div>

                </div>
                <div className="card-footer">
                    <div className="d-flex align-items-center justify-content-between ">
                        <button className="btn btn-warning fw-bolder">$ {salary}</button>
                        <button className="btn btn-success fw-bolder" >Apply Now</button>
                    </div>
                </div>
            </div>
            }
        </div>
    );
};

export default JobView;