import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import RegisterEmployer from './RegisterEmployer';
import CreateJob from './CreateJob';

const Employer = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [employer, setEmployer] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/userIsEmployer?email=' + loggedInUser?.email,
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
                    setEmployer(true)
                }
                else {
                    setEmployer(false)
                }
            })
    }, [loggedInUser.email])

    return (
        <div className="container">
            <div className="m-auto row">
                {
                    employer === true && <CreateJob></CreateJob>
                }
                {
                    employer === false &&

                    <div className="col-6">
                        <RegisterEmployer></RegisterEmployer>
                    </div>
                }

            </div>

        </div>
    );
};

export default Employer;