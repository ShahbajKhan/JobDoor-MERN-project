import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './TestimonialCard.css';

const TestimonialCard = () => {
    return (
        <Row className='p-3'>
            <Col xs={11} sm={6} md={6}>
                <div className='sliderCard shadow' style={{ backgroundColor: '#191919' }}>
                    <p className='text-muted'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam dolore alias temporibus sapiente beatae ullam.</p>
                    <div>
                        <Row>
                            <Col xs={3} sm={3} md={3}>
                                <img src="https://i.ibb.co/Swq45gH/profile8-min.jpg" alt=""/>
                            </Col>
                            <Col xs={9} sm={9} md={9}>
                                <h5>Edy Brock</h5>
                                <p className='text-muted'>United Kingdom</p>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
            <Col xs={11} sm={6} md={6}>
                <div className='sliderCard shadow rounded' style={{ backgroundColor: '#191919' }}>
                    <p className='text-muted'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam dolore alias temporibus sapiente beatae ullam.</p>
                    <div>
                        <Row>
                            <Col xs={3} sm={3} md={3}>
                                <img src="https://i.ibb.co/d0gTWsB/profile7-min.jpg" alt=""/>
                            </Col>
                            <Col xs={9} sm={9} md={9}>
                                <h5 >Jason smitt</h5>
                                <p className='text-muted'>Netherland</p>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default TestimonialCard;