import React, {useContext} from "react";
import TopBar from "../components/topbar/TopBar";
import { mobContext } from "../index";
import MobileTopBar from "../components/mobileOnly/components/MobileTopBar";

export default function About() {
    const isMob = useContext(mobContext);
    const aboutPicture = 'url()';
    return (
        <div className="about-wrapper">
            {isMob === false ?
                <TopBar/> : <MobileTopBar />}
                <div className = "about-me-wrapper">
                    <div className="about-left-column">
                        <div className="about-name-wrapper">
                            <h1>Chase Coble</h1>
                        </div>
                        <div className="about-body-wrapper">
                            <div className="about-biography">
                                Biography
                            </div>
                            <div className="about-education">
                                Education
                            </div>
                            <div className="about-resume">
                                Resume Description/ Downloader
                            </div>
                        </div>        
                    </div>
                    <div className = "about-right-column">
                        <img src={aboutPicture} alt = "ChaseCoble" />
                    </div>
                </div>
            

        </div>
    )
}