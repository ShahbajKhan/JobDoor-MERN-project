import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import RegisterEmployer from './RegisterEmployer';
import CreateJob from './CreateJob';

const Employer = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [employer, setEmployer] = useState();
    const [accountType, setAccountType] = useState('');
    const [postNumber, setPostNumber] = useState(null);

    useEffect(() => {
        fetch('https://fathomless-badlands-44105.herokuapp.com/userIsEmployer?email=' + loggedInUser?.email,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        )
            .then(res => res.json())
            .then(data => {
                if (data.length > 0) {
                    setEmployer(true);
                    setAccountType(data[0].type);
                }
                else {
                    setEmployer(false)
                }
            })
    }, [loggedInUser.email])

    useEffect(() => {
        fetch('https://fathomless-badlands-44105.herokuapp.com/employerJobLength?email=' + loggedInUser?.email,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        )
            .then(res => res.json())
            .then(data => {
                setPostNumber(data?.length);
            })
    }, [loggedInUser.email])

    return (
        <div className="container">
            <div className="m-auto row">
                {
                    employer === true && <CreateJob type={accountType} jobLength={postNumber}></CreateJob>
                }
                {
                    employer === false &&

                    <div className="col-md-6">
                        <RegisterEmployer></RegisterEmployer>
                    </div>
                }

            </div>

        </div>
    );
};

export default Employer;