import React from 'react';
import './InfoStudents.css';


const Info = ({nama, status, bio}) => {
    return (
        <div className="info">
            <h2>{nama}</h2>
            <h3>{status}</h3>
            <p>{bio}</p>
        </div>
    );
}

export default Info;