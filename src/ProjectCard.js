import React, { useState } from 'react';

function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div 
      className="ProjectCard" 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="ProjectContent">
        <img 
          src={isHovered && project.hoverImageURL ? project.hoverImageURL : project.imageURL} 
          alt={project.title} 
        />
        {project.venue && <p className="Venue">{project.venue}</p>}
        <h2>{project.title}</h2>
        {project.authors && <p className="Authors">{project.authors.join(", ")}</p>}
        <p>{project.description}</p>
      </div>
      <div className="links-row">
      {project.projectURL && <a href={project.projectURL}>Project</a>}
      {project.videoURL && <a href={project.videoURL}>Video</a>}
      {project.paperURL && <a href={project.paperURL}>Paper</a>}
      {project.codeURL && <a href={project.codeURL}>Code</a>}
      </div>
    </div>
  );
}

export default ProjectCard;