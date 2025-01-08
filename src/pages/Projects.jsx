import React from 'react'

export default function Projects() {
  return (


    <body>

    <header>
        <a href="index.html">&#x2190; Home</a>
        <h1>My Projects</h1>
    </header>

    <nav>
        <a href="about.html">About</a>
        <a href="projects.html">Projects</a>
        <a href="contact.html">Contact</a>
    </nav>


    <section>
        <h2>Featured Projects</h2>
        <div className="projects">
            <div className="project">
                <h3>Money Tracker</h3>
                <p>A web application to track your income and expenses effectively.</p>
                <a href="https://example.com/money-tracker" target="_blank" rel="noreferrer">View Project</a>
            </div>
            <div className="project">
                <h3>CV Generator</h3>
                <p>An online tool to create professional resumes effortlessly.</p>
                <a href="https://example.com/cv-generator" target="_blank" rel="noreferrer">View Project</a>
            </div>
            <div className="project">
                <h3>Portfolio Website</h3>
                <p>A showcase of my skills and projects, built with HTML, CSS, and JavaScript.</p>
                <a href="https://example.com/portfolio" target="_blank" rel="noreferrer">View Project</a>
            </div>
        </div>
    </section>


    <section>
        <div className="filter-buttons">
            <button onClick={() => filterProjects('all')}>All</button>
            <button onClick={() => filterProjects('web')}>Web Development</button>
            <button onClick={() => filterProjects('data')}>Data Science</button>
            <button onClick={() => filterProjects('mobile')}>Mobile Apps</button>
        </div>
    
        <div id="projects-container">
            <div className="project web">
                <h3>Website Redesign</h3>
                <p>Category: Web Development</p>
                <p>A complete redesign of a client website to enhance user experience.</p>
            </div>
            <div className="project data">
                <h3>Data Analysis Project</h3>
                <p>Category: Data Science</p>
                <p>Analyzed large datasets to identify trends and insights using Python.</p>
            </div>
            <div className="project mobile">
                <h3>Fitness App</h3>
                <p>Category: Mobile Apps</p>
                <p>Developed an app that helps users track their fitness progress on mobile devices.</p>
            </div>
            <div className="project web">
                <h3>Landing Page Development</h3>
                <p>Category: Web Development</p>
                <p>Created a high-converting landing page for an e-commerce website.</p>
            </div>
            <div className="project data">
                <h3>Machine Learning Model</h3>
                <p>Category: Data Science</p>
                <p>Built a machine learning model to predict stock prices based on historical data.</p>
            </div>
        </div>
    </section>
    



    <footer>
        <p>&copy; 2024 Your Name. All rights reserved.</p>
    </footer>
</body>

  )
}



const filterProjects = (category) => {
    let projects = document.querySelectorAll('.project');
    
    if (category === 'all') {
        projects.forEach(project => {
            project.style.display = 'block';
        });
    } else {
        projects.forEach(project => {
            if (project.classList.contains(category)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    }
}
