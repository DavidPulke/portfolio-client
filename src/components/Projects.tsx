import type { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface ProjectsProps {

}

const Projects: FunctionComponent<ProjectsProps> = () => {

    return (<section>
        <h1>Projects</h1>
        <div className="projects">
            <div className="project pulkeMovies">
                <div className="links">
                    <Link to="https://github.com/DavidPulke/final-client" target="_blank">
                        <i className="fa-brands fa-github"></i>
                    </Link>
                    <Link to={"https://final-client-1.onrender.com/"} target="_blank">
                        <i className="fa-solid fa-link"></i>
                    </Link>
                </div>
                <div className="project-data">
                    <p>
                        <strong>Name: </strong>
                        PulkeMovies
                    </p>
                    <p>
                        <strong>Description: </strong>
                        Your ultimate destination for movie lovers!
                        Where, you'll find the latest and greatest in cinema — watch trailers and more .
                    </p>
                </div>
            </div>
            <div className="project davidDesktop">
                <div className="links">
                    <Link to="https://github.com/DavidPulke/davidsdesktop" target="_blank">
                        <i className="fa-brands fa-github"></i>
                    </Link>
                    <Link to={"https://davidsdesktop.onrender.com/"} target="_blank">
                        <i className="fa-solid fa-link"></i>
                    </Link>
                </div>

                <div className="project-data">
                    <p>
                        <strong>Name: </strong>
                        David's Desktop
                    </p>
                    <p>
                        <strong>Description: </strong>
                        Your ultimate destination for movie lovers!
                        Where, you'll find the latest and greatest in cinema — watch trailers and more .
                    </p>
                </div>
            </div>
            <div className="project bcard">
                <div className="links">
                    <Link to="https://github.com/DavidPulke/FinalProjectReact" target="_blank">
                        <i className="fa-brands fa-github"></i>
                    </Link>
                    <Link to={"https://bcard-davidpulke.netlify.app/"} target="_blank">
                        <i className="fa-solid fa-link"></i>
                    </Link>
                </div>
                <div className="project-data">
                    <p>
                        <strong>Name: </strong>
                        BCard
                    </p>
                    <p>
                        <strong>Description: </strong>
                        Your ultimate destination for movie lovers!
                        Where, you'll find the latest and greatest in cinema — watch trailers and more .
                    </p>
                </div>
            </div>
        </div>
    </section>);
}

export default Projects;