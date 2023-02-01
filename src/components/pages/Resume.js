import React from 'react';
import resume from '../../assets/Resume.pdf'

export default function Resume() {
  return (
    <div className="card m-5"
    style={{ border: 'none' }}
    >
      <a style={{ color: '#ff6600' }} 
        href={resume}
        target="_blank" 
        rel="noreferrer">
      View and download Resume here
      </a> <br></br>
      <h1 className='mb-4'>Resume </h1>
      <h5> Front-end Proficiencies:</h5>
      <ul className="">
      <li> HTML </li>
      <li> CSS </li>
      <li> JQuery </li>
      <li> responsive design </li>
      <li> React </li>
      <li> Bootstrap </li>
      </ul>
      <h5> Back-end Proficiencies:</h5>
      <ul className="">
      <li> APIs </li>
      <li> Node </li>
      <li> Express </li>
      <li> MySQL, Sequelize </li>
      <li> MongoDB, Mongoose </li>
      <li> REST </li>
      <li> GraphQL </li>
      </ul>
    </div>
  );
}
