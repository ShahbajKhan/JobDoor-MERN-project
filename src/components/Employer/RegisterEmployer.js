import { faCcMastercard, faCcPaypal } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import ProcessPayment from '../Shared/ProcessPayment/ProcessPayment'
const RegisterEmployer = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();
    const [card, setCard] = useState('Credit Card');
    const [serviceType, setServiceType] = useState('Premium');

    const paymentBy = e => {
        setCard(e.target.value);
    }

    console.log(loggedInUser)

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

        fetch('http://localhost:5000/createEmployer', {
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
                }
            })
    }
    return (
        <div className="container w-100">
            <div className="row ">
                <h5 className="text-center w-100">Dear {loggedInUser.displayName}</h5>
                <h6 className="text-center">Please Enter Your Card Information:</h6>
                <div className=" mb-2 mt-5 w-100 row ">
                    <div className="col-md-8 col-lg-7 col-xs-12" style={{ height: '3rem' }}>
                        <p className="ms-2 fw-bold pShip ">Please Select Account Type:</p><br />
                    </div>
                    <div className="col-md-4 col-lg-2 col-xs-12">
                        <select name="service" className=""  onChange={handleService}>
                            <option>Premium</option>
                            <option >Standard</option>
                            <option>Basic</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-7  col-sm-12 ms-2 bookSection ">
                    <div className="col-md-8 col-sm-12">
                        <p className="me-2 fw-bold">Pay With: </p>
                        <input type="radio" onChange={paymentBy} className="ms-1" id="male" name="gender" defaultChecked={true} value="Credit Card" />
                        <label for="Credit Card"><FontAwesomeIcon className="iconSize  ms-1" icon={faCcMastercard} style={{ color: '#DF3512' }} />Credit Card</label>

                        <input type="radio" onChange={paymentBy} className="ms-1" id="Paypal" name="gender" value="Paypal" />
                        <label for="Paypal"><FontAwesomeIcon className="iconSize ms-1" icon={faCcPaypal} style={{ color: '#253b80' }} />Paypal</label>

                        <ProcessPayment handlePayment={handlePaymentSuccess} ></ProcessPayment>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default RegisterEmployer;