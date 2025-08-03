import { useState, type FunctionComponent } from "react";

interface AboutProps {

}

const About: FunctionComponent<AboutProps> = () => {
    const [extend, setExtend] = useState<boolean>(false);

    return (<div className="about">
        <article>
            Hi, I'm David Polak – a Fullstack Developer who builds practical, efficient, and user-centered web applications.
            I focus on creating clean, maintainable code and thoughtful UI that works well across devices.
            <br />
            Every project in this portfolio was built from the ground up, combining frontend and backend logic into one cohesive experience. I'm always looking for ways to improve, simplify, and push things a step further.
            {!extend && <button onClick={() => setExtend(!extend)} className="extend-btn">
                more <i className="fa-solid fa-caret-down"></i>
            </button>}
            <br />
            <div className={!extend ? `more-info` : ""}>
                I'm currently looking for a Junior Developer role where I can contribute, learn, and grow as part of a professional team.
            </div>

            {extend && <button onClick={() => setExtend(!extend)} className="extend-btn">
                less <i className="fa-solid fa-caret-up"></i>
            </button>}

        </article>
    </div>);
}

export default About;