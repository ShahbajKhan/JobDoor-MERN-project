import React from 'react';
import { Button, Carousel, Col, Row } from 'react-bootstrap';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const Testimonial = () => {
    return (
        <div className='container'>
            <Row className='mt-5 mb-5'>
                <Col xs={11} sm={11} md={4}>
                    <div>
                        <div className='fw-bold'>
                            <h5 style={{color:'#41adb7'}}>TESTIMONIAL</h5>
                            <h2>What's Clients Say About Us</h2>
                        </div>
                        <p className='mt-2 text-muted'>We help clients buy and sell homes, yes, but it’s about far more than closing deals for us.</p>
                        <Button style={{color:'white',background:'#fd592d',fontSize:'1.5rem'}} variant='none'>Explore All</Button>
                    </div>
                </Col>
                <Col xs={11} sm={11} md={8}>
                    <Carousel>
                        <Carousel.Item>
                            <TestimonialCard></TestimonialCard>
                        </Carousel.Item>
                        <Carousel.Item>
                            <TestimonialCard></TestimonialCard>
                        </Carousel.Item>
                        <Carousel.Item>
                            <TestimonialCard></TestimonialCard>
                        </Carousel.Item>
                        <Carousel.Item>
                            <TestimonialCard></TestimonialCard>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </div>
    );
};

export default Testimonial;