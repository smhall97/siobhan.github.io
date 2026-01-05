import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Siobhan Mackenzie Hall</h1>
        <p className="tagline">Portfolio & Projects</p>
      </header>

      <main className="main-content">
        <section className="intro">
          <h2>Welcome</h2>
          <p>This is your new portfolio website. Customize this content to showcase your work and projects.</p>
        </section>

        <section className="projects">
          <h2>Projects</h2>
          <div className="project-grid">
            <div className="project-card">
              <h3>Project 1</h3>
              <p>Description of your first project</p>
            </div>
            <div className="project-card">
              <h3>Project 2</h3>
              <p>Description of your second project</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 Siobhan Mackenzie Hall</p>
      </footer>
    </div>
  )
}

export default App