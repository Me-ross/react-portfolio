import React from 'react';


export default function Portfolio ( { projectList }){
  return (
  <div className="card">
    {projectList.map ((project) => (
      <div key={project.id}>
        <img
        className="card-img-top"
        src={project.imgPath}
        alt={project.alt}>
        </img>
        <h5 className="card-title">{project.name}</h5>
        <p className="card-text">{project.description}</p>
        <p className="card-text ">{project.techUsed}</p>
        <a href={project.githubLink} class="btn btn-primary">GitHub</a>
        <a href={project.deployedAt} class="btn btn-primary">Demo</a>
      </div>
    ))}
  </div>
  );
};

{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}