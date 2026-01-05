import React from 'react';

const ExperienceTimeline = ({ experiences }) => (
  <div className="timeline-hypercontainer">
    <div className="timeline-container">
      {experiences.map((exp) => (
        <div key={exp.id} className="timeline-item">
          <p>{exp.duration}</p>
          <h3>{exp.title}</h3>
          <a href={exp.company_link} target="_blank" rel="noopener noreferrer"><h4>{exp.company}</h4></a>
          <h5>{exp.location}</h5>
          <p>{exp.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default ExperienceTimeline;