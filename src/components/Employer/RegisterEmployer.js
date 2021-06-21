import { faCcMastercard, faCcPaypal } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import Navbar from '../Shared/Navbar/Navbar';
import ProcessPayment from '../Shared/ProcessPayment/ProcessPayment'
const RegisterEmployer = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();
    const [card, setCard] = useState('Credit Card');
    const [serviceType, setServiceType] = useState('Premium');
    let history = useHistory();
    const paymentBy = e => {
        setCard(e.target.value);
    }
    const handleService = e => {
        setServiceType(e.target.value);
    }

    const handlePaymentSuccess = paymentId => {
        const bookDetails = {
            user: loggedInUser.displayName,
            email: loggedInUser.email,
            photo: loggedInUser.photo,
            PaymentMethod: card,
            paymentId,
            type: serviceType
        };

        fetch('https://fathomless-badlands-44105.herokuapp.com/createEmployer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Employer added');
                    history.push('/');
                }
            })
    }
    return (
        <section className="mt-5">
            <Navbar/>
            <div className="container w-100 mt-5">
                <h3 className="mt-5">Hello! {loggedInUser.displayName},</h3>
                <h4>Please Provide Your Payment Info.</h4>
                <div className="row mt-5 mb-3">
                    <div className=" my-2 w-100 ">
                        <div className="col-md-6">
                            <label className="">Account Type: </label>
                            <select name="service" className="form-select" onChange={handleService}>
                                <option>Premium(30 Jobs)</option>
                                <option >Standard (20 jobs)</option>
                                <option>Basic(10 Jobs)</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-md-7  col-sm-12 ms-2">
                        <div className="col-md-8 col-sm-12">
                            <p className="me-2 fw-bold">Pay With: </p>
                            <input type="radio" onChange={paymentBy} className="ms-1" id="creditCard" name="paymentby" defaultChecked={true} value="Credit Card" />
                            <label for="Credit Card"><FontAwesomeIcon className="ms-1" icon={faCcMastercard} style={{ color: '#DF3512' }} />Credit Card</label>

                            <input type="radio" onChange={paymentBy} className="ms-1" id="Paypal" name="paymentby" value="Paypal" />
                            <label for="Paypal"><FontAwesomeIcon className="ms-1" icon={faCcPaypal} style={{ color: '#253b80' }} />Paypal</label>

                            <ProcessPayment handlePayment={handlePaymentSuccess} ></ProcessPayment>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default RegisterEmployer;