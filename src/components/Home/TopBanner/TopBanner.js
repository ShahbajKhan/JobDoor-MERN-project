import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../../../images/ab-img.png'
import './TopBanner.css'
const TopBanner = () => {
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center w-100">
            <div className="col-sm-12 col-lg-4 offset-md-1 mb-4 fw-bolder">
                <p>Job Fair!</p>
                <h1>Find <span style={{ color: '#ff4d30' }}>Your</span> Dream <br /> job</h1>
                <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci perferendis fuga officia dicta, voluptatem provident!</p>
                <Link to="/postJob" style={{ backgroundImage: 'linear-gradient(to left,#f0561d,#fff,#ff6830,#f0561d)' }} className="btn btn-lg fw-bolder">Post Job</Link>
            </div>
            <div className="col-md-12 col-lg-6">
                <img src={bannerImage} alt="" className="img-fluid w-75" />
            </div>
        </main>
    );
};

export default TopBanner;