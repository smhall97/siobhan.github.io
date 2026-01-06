import React, { useState } from 'react';
import './App.css';
import ProjectCard from './ProjectCard';
import projectsData from './projects.json';
import ExperienceTimeline from './ExperienceTimeline';
import experiencesData from './timeline.json';

function App() {
  const projects = projectsData;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAllNews, setShowAllNews] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const newsEntries = [
    { id: 1, content: "October 2025: I submitted my thesis!" },
    {
      id: 2,
      content: (
        <>October - December 2025: I joined the University of Cambridge's CHIA Lab as a <a href="https://www.chia.cam.ac.uk/team/siobhan-hall" target="_blank" rel="noopener noreferrer">research assistant</a></>
      )
    },
    { id: 3, content: "Septembert 2025: I am the Chair for the 2025 Deep Learning Indaba's Ideathon" },
    { id: 4, content: "August 2025: I attended the Deep Learning Indaba in Kigali" },
    { id: 5, content: "June 2025: Our paper, The World Wide Recipe received a Best Paper Honourable Mention at FAccT 2025!" },
    { id: 6, content: "September 2024 - February 2025: I worked at Google DeepMind as a Research Intern" },
    { id: 7, content: "September 2024: I am in Dakar, Senegal for the Deep Learning Indaba" },
    { id: 8, content: "May - August 2024: I worked at Microsoft Research as an Engineering Intern" },
    { id: 9, content: "April 2024: I was awarded $20,000 in OpenAI API credits to support our work on World Wide Dishes" },
    { id: 10, content: "January 2024: I am the Chair for the Deep Learning Indaba's Mentorship Programme " },
    { id: 11, content: "December 2023: I am in New Orleans, United States for NeurIPS" },
    { id: 12, content: "September 2023: I am in Accra, Ghana for the Deep Learning Indaba" },
    { id: 13, content: "May 2023: I am in Cape Town, South Africa for the IBRO-Simons Computational Neuroscience Imbizo" },
    { id: 14, content: "January 2023: I am the Communications Chair for the Deep Learning Indaba" },
    { id: 15, content: "September 2022: I am in Tunis, Tunisia for the Deep Learning Indaba" },
    {
      id: 16,
      content: (
        <>October 2021: I started my DPhil at the University of Oxford with the <a href="https://www.nds.ox.ac.uk/team/siobhan-hall" target="_blank" rel="noopener noreferrer">Oxford Neural Interfacing Group</a></>
      )
    },
    {
      id: 17,
      content: (
        <>November 2021: We hosted our final episode of <a href="https://www.youtube.com/@nervonline1850" target="_blank" rel="noopener noreferrer">NERV</a></>
      )
    }
  ];

  const visibleNews = showAllNews ? newsEntries : newsEntries.slice(0, 10);

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
        <h2 className="fixed-name"><a href="#about">Siobhan Mackenzie Hall</a></h2>

        {/* Hamburger Button - Mobile Only */}
        <button
          className="hamburger-menu"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="hamburger-icon"></span>
          <span className="hamburger-icon"></span>
          <span className="hamburger-icon"></span>
        </button>

        {/* Navigation Menu */}
        <nav className={`nav-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="#about" onClick={closeMobileMenu}>About</a>
          <a href="#publications" onClick={closeMobileMenu}>Publications</a>
          <a href="#experience" onClick={closeMobileMenu}>Experience</a>
          <a href="#contact" onClick={closeMobileMenu}>Contact</a>
        </nav>

        {/* Overlay for mobile menu */}
        {isMobileMenuOpen && (
          <div
            className="menu-overlay"
            onClick={closeMobileMenu}
            aria-hidden="true"
          ></div>
        )}

        <h1 id="about">About me</h1>
        <img src={`${process.env.PUBLIC_URL}/images/SMHall.webp`} alt="Profile" className="profile-photo"/>
        <div className="social-links-row">
          <a href="https://github.com/smhall97" target="_blank" rel="noopener noreferrer">
            Github
          </a>
          <a href="https://www.linkedin.com/in/siobhan-mackenzie-hall-805255bb/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="#contact">
            Email
          </a>
          <a href="https://scholar.google.com/citations?user=A9c8wlwAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
            Google Scholar
          </a>
          <a href="CV.pdf" target="_blank" rel="noopener noreferrer">
            CV
          </a>
        </div>
        <p className="bio-text">
          I am a DPhil Candidate at
          the <a href="https://www.ox.ac.uk/" target="_blank" rel="noopener noreferrer">University of Oxford</a>, <a href="https://www.nds.ox.ac.uk/research/oxford-neural-interfacing" target="_blank" rel="noopener noreferrer">Oxford Neural Interfacing Group</a>,
          where I work on computational neuroscience and AI fairness.
        </p>
      </header>
      <section className="update-log-section">
        <h3>Recent News</h3>
        <ul className="update-log-list">
          {visibleNews.map((entry) => (
            <li key={entry.id} className="update-log-entry">
              {entry.content}
            </li>
          ))}
        </ul>
        {newsEntries.length > 10 && (
          <button
            className="toggle-news-button"
            aria-label={showAllNews ? "Collapse recent news list" : "Expand to see all recent news"}
            onClick={() => setShowAllNews(!showAllNews)}
          >
            {showAllNews ? "Show less" : "See more"}
          </button>
        )}
      </section>
      <h1 id="publications">Publications</h1>
      <h4>See my <a href="https://scholar.google.com/citations?user=A9c8wlwAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a> for a complete list of publications.</h4>
      <div className="Projects-container">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <h1 id="experience">Roles & Experience</h1>
      <h4>A more detailed CV is available&nbsp;
      <a href="CV.pdf" target="_blank" rel="noopener noreferrer">
        here.</a>
      </h4>
      <ExperienceTimeline experiences={experiencesData}/>
      <h1 id="contact">Contact</h1>
      <div style={{ padding: '20px', maxWidth: '700px', margin: '0 auto' }}>
        <p>
          Please feel welcome to reach out to me via email: <strong>siobhan.hall [at] nds.ox.ac.uk</strong>
        </p>
      </div>
      <div className="attribution">
        <h6>Copyright © 2026 Siobhan Mackenzie Hall. All Rights Reserved. &nbsp;</h6>
      </div>
    </div>
  );
}

export default App;
