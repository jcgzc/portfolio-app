import './Main.css';
function Main(){
    return(
        <main>
        <section id="about">
            <h2>About Me</h2>
            <p>Welcome to my portfolio website!</p>
        </section>
    
        <section id="projects">
            <h2>My Projects</h2>
            <div class="projects">
                <div class="project">
                    <h3>Project One</h3>
                    <p>A brief description of this project. It showcases my skills in frontend and backend development.</p>
                </div>
                <div class="project">
                    <h3>Project Two</h3>
                    <p>A brief description of this project. It focuses on responsive design and user experience.</p>
                </div>
            </div>
        </section>
    
        <section id="contact">
            <h2>Contact Me</h2>
            <p>If you would like to work together, feel free to reach out to me via email at <a href="mailto:yourname@example.com">yourname@example.com</a>.</p>
        </section>
    </main>
    )
}

export default Main;