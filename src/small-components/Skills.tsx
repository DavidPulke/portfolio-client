import type { FunctionComponent } from "react";
import Tooltip from "./tooltip";

interface SkillsProps {

}

const Skills: FunctionComponent<SkillsProps> = () => {
    return (<div className="skills">
        {/* HTML */}
        <Tooltip text="HTML">
            <img src="/skills/html-icon.png" alt="html logo" />
        </Tooltip>

        {/* CSS */}
        <Tooltip text="CSS">
            <img src="/skills/css-logo.png" alt="css logo" />
        </Tooltip>

        {/* JS */}
        <Tooltip text="JS">
            <img src="/skills/js-logo.png" alt="js logo" />
        </Tooltip>

        {/* TS */}
        <Tooltip text="TS">
            <img src="/skills/ts-logo.png" alt="ts logo" />
        </Tooltip>

        {/* React.tsx */}
        <Tooltip text="React (TSX)">
            <img src="/skills/react-logo.png" alt="react logo" />
        </Tooltip>

        {/* EXPRESS */}
        <Tooltip text="ExpressJS">
            <img src="/skills/express-logo.png" alt="express logo" />
        </Tooltip>

        {/* MYSQL */}
        <Tooltip text="MYSQL">
            <img src="/skills/mysql-logo.png" alt="mysql logo" />
        </Tooltip>

        {/* MongoDB */}
        <Tooltip text="MongoDB">
            <img src="/skills/mongodb-logo.png" alt="mongodb logo" title="MongoDB" />
        </Tooltip>

        {/* MongoDB */}
        <Tooltip text="NodeJs">
            <img src="/skills/nodejs-logo.png" alt="nodejs logo" title="NodeJs" />
        </Tooltip>
    </div>);
}

export default Skills;