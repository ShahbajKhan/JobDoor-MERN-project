import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './AgentCard.css';
const AgentCard = ({ agentData }) => {
    const { img, name, position } = agentData;
    return (
        <div className='m-auto pt-4 col-lg-3 col-md-4 col-sm-6'>
            <div className='agentCard p-3 shadow' style={{ backgroundColor: '#191919' }}>
                <div className='agentCardImg'>
                    <img src={img} alt=""/>
                    <div className='d-flex align-items-center justify-content-center agentCardIcon'>
                        <FontAwesomeIcon className='p-1 m-1' icon={faFacebook} />
                        <FontAwesomeIcon className='p-1 m-1' icon={faTwitter} />
                        <FontAwesomeIcon className='p-1 m-1' icon={faLinkedin} />
                        <FontAwesomeIcon className='p-1 m-1' icon={faInstagram} />
                    </div>
                </div>
                <h4>{name}</h4>
                <div className='d-flex align-items-center justify-content-between'>
                    <span className='text-muted'>{position}</span>
                    <div style={{ color: '#FDBD4C' }}>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgentCard;