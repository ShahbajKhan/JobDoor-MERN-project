import React from 'react';

const pendingJobsView = (props) => {

    const { category, type, title, location, deadline, status, _id } = props.job;
    const handleChange = e => {
        const jobDetails = {
            status: e.target.value
        };


        fetch(`https://fathomless-badlands-44105.herokuapp.com/job/status/${_id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(jobDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Job approved')
                }
            })
    }


    return (
        <div className="card mb-3 ms-1" >
            <div className="row">
                <div className="col-md-9 ms-3">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{location}</p>
                        <p className="card-text">{type}</p>

                        <select name="status" onChange={handleChange} className="btn btn-lg btn-success" >
                            {
                                status === "Pending" && <>
                                    <option>Pending</option>
                                    <option>Approved</option>
                                </>
                            }
                            {
                                status === "Approved" && <>
                                    <option >Approved</option>
                                    <option>Approved</option>
                                </>
                            }


                        </select>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default pendingJobsView;