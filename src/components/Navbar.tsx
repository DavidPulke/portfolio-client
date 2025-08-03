import type { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

interface NavbarProps {

}

const Navbar: FunctionComponent<NavbarProps> = () => {
    return (<nav>
        <ul>
            <li>
                <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
                <NavLink to={"/projects"}>Projects</NavLink>
            </li>
            <li>
                <NavLink to={"/contact"}>Contact</NavLink>
            </li>
        </ul>

    </nav>);
}

export default Navbar;