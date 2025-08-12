import type { FunctionComponent } from "react";

interface LinksMediaProps {

}

const LinksMedia: FunctionComponent<LinksMediaProps> = () => {
    return (<div className="links-media">
        <a href='https://www.linkedin.com/in/david-polak-/?trk=opento_sprofile_topcard' target="_blank"><i className="fa-brands fa-linkedin"></i></a>
    </div>);
}

export default LinksMedia;