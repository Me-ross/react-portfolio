import React from 'react';
import projectList from './ProjectList';

export default function Portfolio ( { projectList }){
  <div className="container">
    {projectList.map ((project) => (
      <div key={project.id}>
        <p>{project.name}</p>
        
      </div>
    ))}
  </div>
};

