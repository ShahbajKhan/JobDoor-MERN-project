import React from 'react';

const JobSeekerView = (props) => {
    const { name, email, degree, expectedSalary } = props.seeker;
    
    return (
        <tbody>
            <tr>
                <td >{name}</td>
                <td >{email}</td>
                <td>{degree}</td>
                <td>{expectedSalary}</td>
            </tr>
        </tbody>
    );
};

export default JobSeekerView;