import { useState, type FunctionComponent } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


interface Project {
    name: string;
    description: string;
    github: string;
    link: string;
    images: string[];
}

const projectsData: Project[] = [
    {
        name: "pulkeMovies",
        description:
            "Your ultimate destination for movie lovers! Where you'll find the latest and greatest in cinema — watch trailers and more.",
        github: "https://github.com/DavidPulke/final-client",
        link: "https://final-client-1.onrender.com/",
        images: [
            "/images/pulkeMovies/PulkeMovies-About.png",
            "/images/pulkeMovies/PulkeMovies-Chat.png",
            "/images/pulkeMovies/PulkeMovies-Home.png",
            "/images/pulkeMovies/PulkeMovies-Market.png",
            "/images/pulkeMovies/MovieInfo.png"
        ]
    },
    {
        name: "davidDesktop",
        description:
            "A custom desktop simulation in the browser with draggable folders and persistent data.",
        github: "https://github.com/DavidPulke/davidsdesktop",
        link: "https://davidsdesktop.onrender.com/",
        images: [
            "/images/desktop/Desktop(3).png",
            "/images/desktop/Desktop(2).png",
            "/images/desktop/Desktop(1).png",
            "/images/desktop/Desktop(5).png",
            "/images/desktop/Desktop(4).png",
        ]
    },
    {
        name: "bcard",
        description:
            "Business card generator and manager with responsive design and local storage.",
        github: "https://github.com/DavidPulke/FinalProjectReact",
        link: "https://bcard-davidpulke.netlify.app/",
        images: [
            "/images/bcard/BCard(3).png",
            "/images/bcard/BCard(4).png",
            "/images/bcard/BCard(1).png",
            "/images/bcard/BCard(2).png",
        ]
    }
];

const Projects: FunctionComponent = () => {
    const [selectedImages, setSelectedImages] = useState<string[] | null>(null);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section>
            <h1>Projects</h1>
            <div className="projects">
                {projectsData.map((project, index) => (
                    <div key={index} className={`project ${project.name}`}>
                        <div className="links">
                            <Link to={project.github} target="_blank">
                                <i className="fa-brands fa-github"></i>
                            </Link>
                            <Link to={project.link} target="_blank">
                                <i className="fa-solid fa-link"></i>
                            </Link>
                            <button
                                className="images-btn"
                                onClick={() => setSelectedImages(project.images)}
                            >
                                <i className="fa-regular fa-images"></i>
                            </button>
                        </div>
                        <div className="project-data">
                            <p>
                                <strong>Name: </strong>
                                {project.name}
                            </p>
                            <p>
                                <strong>Description: </strong>
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal Slider */}
            {selectedImages && (
                <div className="modal">
                    <div className="modal-content">
                        <button className="close" onClick={() => setSelectedImages(null)}>
                            ✖
                        </button>
                        <Slider {...sliderSettings}>
                            {selectedImages.map((img, i) => (
                                <div key={i}>
                                    <img src={img} alt={`slide-${i}`} className="slider-img" />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
