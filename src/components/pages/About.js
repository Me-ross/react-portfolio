import React from 'react';
import avatar from "./Projects/Images/Avatar.jpg"

export default function About() {
  return (
<div className="card m-3" style={{maxWidth: '540px'}} >
<div className="row no-gutters ">
  <div className="col-sm-4">
    <img src={avatar} className="card-img" alt="Avatar"></img>
  </div>
  <div className="col-sm-8 ">
    <div className="card-body">
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      
    </div>
  </div>
</div>
</div>
  );
}

