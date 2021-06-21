import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
const JobView = (props) => {
    const {category,type,title,location,deadline,status,salary} = props.job;

    return (
        <div className="mb-5 col-lg-4 col-sm-6 vehicleCard text-dark">
            <div className="card shadow-lg w-100 h-100 text-center rounded ">
                <div className="d-flex justify-content-center align-items-center p-2">
                    <FontAwesomeIcon icon={faBriefcase} style={{height:'50px', width: '50px'}}></FontAwesomeIcon>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p>{category}</p>
                    <p>{type}</p>
                    <p>{location}</p>
                    
                </div>
                <div className="card-footer">
                    <div className="d-flex align-items-center justify-content-between ">
                        <h3 className="text-warning fw-bold">$ {salary}</h3>
                        <button className="btn btn-success" >Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobView;