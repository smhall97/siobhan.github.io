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
        {project.imageURL && (
          <img
            src={isHovered && project.hoverImageURL ? project.hoverImageURL : project.imageURL}
            alt={project.title}
          />
        )}
        {project.venue && <p className="Venue">{project.venue}</p>}
        <h2>{project.title}</h2>
        {project.authors && <p className="Authors">{project.authors.join(", ")}</p>}
        <p>{project.description}</p>
      </div>
      <div className="links-row">
      {project.projectURL && <a href={project.projectURL} target="_blank" rel="noopener noreferrer">Project</a>}
      {project.videoURL && <a href={project.videoURL} target="_blank" rel="noopener noreferrer">Video</a>}
      {project.paperURL && <a href={project.paperURL} target="_blank" rel="noopener noreferrer">Paper</a>}
      {project.codeURL && <a href={project.codeURL} target="_blank" rel="noopener noreferrer">Code</a>}
      </div>
    </div>
  );
}

export default ProjectCard;