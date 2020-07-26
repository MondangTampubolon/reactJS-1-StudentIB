import React from 'react';
import Avatar from './components/Avatar.js';
import CardCourses from './components/CardCourses';
import InfoStudents from './components/InfoStudents';
import './App.css';

function App() {
  let user = {
    nama: "Mondang Tampubolon  ",
    status: "Imapct Byte Bootcamp Student",
    bio: "Coding teach me how to think",
    avatar: 'https://images.unsplash.com/photo-1488723905857-809bb9a2d21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80.png',
  }
 
  let course =
  [
    {
      title: "HTML Foundation",
      course: "Learn HTML fundamental for building website",
      urlVideo: "https://www.youtube.com/watch?v=YZTJ7DAbU7g",
      avatar: 'https://images.unsplash.com/photo-1488723905857-809bb9a2d21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80.png',
 
    },
    {
      title: "CSS Foundation",
      course: "Learning CSS fundamental for design a responsive website",
      urlVideo: "https://www.youtube.com/watch?v=1PnVor36_40",
      avatar: 'https://images.unsplash.com/photo-1488723905857-809bb9a2d21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80.png',

    },
  ]; 
 
  return (
    
      <div className="container">
        <div className="infos">
          <Avatar url={user.avatar}/>
          <InfoStudents nama={user.nama} status={user.status} bio={user.bio} />
        </div>
        
        <h2>My Courses</h2>
        <div className="kotak">
            <CardCourses cardCourse={course} />
        </div>
          
       
        
      </div>
    
  );
}
export default App;