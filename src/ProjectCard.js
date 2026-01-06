import React, { useState } from 'react';

function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="ProjectCard"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.open(project.paperURL, '_blank', 'noopener,noreferrer')}
      style={{ cursor: 'pointer' }}
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
        {project.authors && (
          <p className="Authors">
            {project.authors.map((author, index) => (
              <React.Fragment key={index}>
                {author === "Siobhan Mackenzie Hall" ? (
                  <strong>{author}</strong>
                ) : (
                  author
                )}
                {index < project.authors.length - 1 && ", "}
              </React.Fragment>
            ))}
          </p>
        )}
        <p>{project.description}</p>
      </div>
      <div className="links-row">
      {project.projectURL && <a href={project.projectURL} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>Project</a>}
      {project.videoURL && <a href={project.videoURL} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>Video</a>}
      {project.codeURL && <a href={project.codeURL} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>Code</a>}
      </div>
    </div>
  );
}

export default ProjectCard;