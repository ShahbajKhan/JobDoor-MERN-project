import React from 'react';

const JobView = (props) => {
    const {category,type,title,location,deadline,status,salary} = props.job;
    console.log(props.job)
    return (
        <div className="mb-5 col-lg-4 col-sm-6 vehicleCard">
            <div className="card shadow-lg w-100 h-100 text-center rounded ">
                <div className="d-flex justify-content-center align-items-center h-75 p-2">
                    <img src="" className="card-img-top h-75 w-75" alt=""/>
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