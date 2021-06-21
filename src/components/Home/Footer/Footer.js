import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footerMain pt-5'>
            <div className='container-lg p-3'>
                <Row>
                    <Col className='text-white p-2' xs={10} sm={6} md={3}>
                        <h2>JobDoor</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatibus accusantium beatae.</p>
                        <div className='d-flex align-items-center text-white'>
                            <Button variant='none' className='text-white mr-1'>
                                <FontAwesomeIcon icon={faFacebook} />
                            </Button>
                            <Button variant='none' className='text-white mr-1'>
                                <FontAwesomeIcon icon={faTwitter} />
                            </Button>
                            <Button variant='none' className='text-white mr-1'>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </Button>
                        </div>
                    </Col>
                    <Col className='footerLink text-white p-2' xs={10} sm={6} md={3}>
                        <h4>Lorem, ipsum.</h4>
                        <h6>Lorem, ipsum dolor.</h6>
                        <h6>Lorem, ipsum dolor.</h6>
                        <h6>Our Agency</h6>
                        <h6>Jobs - Remote</h6>
                        <h6>Offices Jobs</h6>
                    </Col>
                    <Col className='footerLink text-white p-2' xs={10} sm={6} md={3}>
                        <h4>Quick Links</h4>
                        <h6>Terms of Use</h6>
                        <h6>Privacy Policy</h6>
                        <h6>Contact Support</h6>
                        <h6>Careers</h6>
                        <h6>FAQs</h6>
                    </Col>
                    <Col className='footerLink text-white p-2' xs={10} sm={6} md={3}>
                        <h4>Contact Us</h4>
                        <h6>example@gmail.com</h6>
                        <h6>+88011112222</h6>
                        <h6>Bangladesh, Chittagong</h6>
                    </Col>
                </Row>
            </div>
            <div className='lastText p-4'>
                <p className='text-center m-0'>Copyright&copy;2021 JobDoor All Right Reserved.</p>
            </div>       
        </div>
    );
};

export default Footer;