import React from 'react';
import avatar from "./Projects/Images/Avatar.jpg"

export default function About() {
  return (
<div className="card m-5" style={{maxWidth: '540px'}} >
<div className="row no-gutters ">
  <div className="col-sm-4">
    <img src={avatar} className="card-img" alt="Avatar"></img>
  </div>
  <div className="col-sm-8 ">
    <div className="card-body">
      <p className="card-text">Welcome! 
    Excite about creating a clean efficient web application for your next project.</p>
      
    </div>
  </div>
</div>
</div>
  );
}

