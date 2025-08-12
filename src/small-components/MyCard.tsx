import { useState, type FunctionComponent } from "react";
import { successMsg } from "../services/feedback";

interface MyCardProps {

}

const MyCard: FunctionComponent<MyCardProps> = () => {

    const email = "davidpolak10201@gmail.com";
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setIsCopied(true);
            successMsg("Email copied!")
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (<div className="user-card mb-3">
        <div className="resume">
            <a href="/DavidPolak-CV(Edited).pdf" download={"/DavidPolak-CV(Edited).pdf"}>CV</a>
        </div>
        <img src={"/images/Myself.jpeg"} alt={"My Icon"} />
        <div className="user-data">
            <h4><strong>Name: </strong>David Polak</h4>
            <div>
                <i onClick={handleCopy} className={`${isCopied ? "fa-solid" : "fa-regular"} fa-copy`}></i>
                <h4><strong>Email: </strong>{email}</h4>
            </div>

            <h4><strong>Open to work: </strong><i className="fa-solid fa-check"></i> </h4>
            <h4><strong>Age: </strong>22</h4>
        </div>

    </div>);
}

export default MyCard;