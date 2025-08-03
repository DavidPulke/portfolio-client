import type { FunctionComponent } from "react";
import MyCard from "../small-components/MyCard";
import Skills from "../small-components/Skills";
import About from "./About";
import Projects from "./Projects";

interface HomeProps {

}

const Home: FunctionComponent<HomeProps> = () => {
    return (<main className="home">
        <MyCard />
        <div className="flex-column">
            <About />
            <Skills />
        </div>
        <Projects />

    </main>);
}

export default Home;