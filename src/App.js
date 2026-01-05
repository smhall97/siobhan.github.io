import React from 'react';
import './App.css';
import ProjectCard from './ProjectCard';
import projectsData from './projects.json';
import ExperienceTimeline from './ExperienceTimeline';
import experiencesData from './timeline.json';

function App() {
  const projects = projectsData;

  return (
    <div className="App"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/website_bg_blue.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed', // Keeps the image fixed during scrolling
        minHeight: '100vh',
      }}
    >
      <header className="App-header">
        <h2 className="fixed-name">Siobhan Mackenzie Hall</h2>
        <nav className="nav-menu">
          <a href="#about">About</a>
          <a href="#publications">Publications</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <h1 id="about">About me</h1>
        <img src={`${process.env.PUBLIC_URL}/images/SMHall.jpg`} alt="Profile" className="profile-photo"/>
        <p>
          I am a DPhil Candidate at
          the <a href="https://www.ox.ac.uk/" target="_blank" rel="noopener noreferrer">University of Oxford</a>, <a href="https://www.nds.ox.ac.uk/research/oxford-neural-interfacing" target="_blank" rel="noopener noreferrer">Oxford Neural Interfacing Group</a>,
          where I work on computational neuroscience and AI fairness.
        </p>
        <p>
          Plot twist: I submitted my thesis in October 2025!
        </p>
        <p>
        <a href="https://github.com/smhall97" target="_blank" rel="noopener noreferrer">
          Github
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://www.linkedin.com/in/siobhan-mackenzie-hall-805255bb/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="#contact">
          Email
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://scholar.google.com/citations?user=A9c8wlwAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
          Google Scholar
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="CV.pdf" target="_blank" rel="noopener noreferrer">
        CV
        </a>

        </p>
      </header>
      <h1 id="publications">Projects & Publications</h1>
      <div className="Projects-container">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <h1 id="experience">Roles & Experience</h1>
      <h4>More detailed CV available
      &nbsp;<a href="CV.pdf" target="_blank" rel="noopener noreferrer">
        here</a>
      </h4>
      <ExperienceTimeline experiences={experiencesData}/>
      <h1 id="contact">Contact</h1>
      <div style={{ padding: '20px', maxWidth: '700px', margin: '0 auto' }}>
        <p>
          Feel free to reach out to me at: <strong>siobhan.hall [at] nds.ox.ac.uk</strong>
        </p>
      </div>
      <div className="attribution">
        <h6>Copyright © 2026 Siobhan Mackenzie Hall. All Rights Reserved. &nbsp;</h6>
      </div>
    </div>
  );
}

export default App;
