import React from 'react';
import './CardCourses.css';
import ReactPlayer from "react-player"
import Avatar from './Avatar';

const Courses = ({cardCourse}) => {
    return (
        <div className="kotak">
            {
                cardCourse.map((element) => (
                    <div className='main'>
                         
                            <ReactPlayer
                            url={element.urlVideo}
                            width={350}
                            height={200}
                             />
                        <div className="content">
                            <h3>{element.title}</h3>
                            <p2>{element.course}</p2>
                        </div>
                        
                        <div className="ava">
                            <Avatar url={element.avatar}/>
                        </div>
                        
                       
                       
                    </div>
                     
                ))
            }
        </div>
    );
}

export default Courses;