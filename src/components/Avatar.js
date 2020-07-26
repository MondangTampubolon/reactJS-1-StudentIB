import React from 'react';
import '../components/Avatar.css';
// import avatar from "../assets/futu.jpg";

const Avatar = ({url})=> {
    return (
        <div>
            <img
            src={url}
            alt="Avatar"
            className="avatar"
            />
        </div>
    )
}
      

export default Avatar;