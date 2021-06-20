import React from 'react';
import { Link } from 'react-router-dom';
const NoRoute = () => {
    return (
        <div>
            <h1>No such Routes</h1>
            <Link to="/">Home</Link>
        </div>
    );
};

export default NoRoute;