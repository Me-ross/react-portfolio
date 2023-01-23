import React from 'react';
import TechUsed from './TechUsed'


export default function Projects ( { projectList }){
  return (
  <div className="container">
    {projectList.map ((project) => (
      <div key={project.id}>
        <div className="card text-center m-2">
          <img
          className="card-img-top"
          src={project.imgPath}
          alt={project.alt}>
          </img>
          <div className='card-body'>
            <h5 className="card-title">{project.name}</h5>
            <p className="card-text">{project.description}</p>
            <div>
              <TechUsed tech={project.techUsed}/>
            </div>
            <a href={project.githubLink} className="btn btn-primary m-2">GitHub</a>
            <a href={project.deployedAt} className="btn btn-primary">Demo</a>
          </div>
        </div>
      </div>
    ))}
  </div>
  );
};

