import React, {useContext} from "react";
import TopBar from "../components/topbar/TopBar";
import PortfolioContainer from "../components/portfolio/PortfolioContainer";
import bioPic from "../helper/images/biography/bioBlurb.jpg"
import {mobContext} from "../index"
import MobileTopBar from "../components/mobileOnly/components/MobileTopBar"

export default function Root() {
    const isMob = useContext(mobContext);
    const mobTag = (isMob === true) ? "-mobile" : "";
    return (
        <div className = "container" id = "root-wrapper">
            {isMob === false ? <TopBar/> : <MobileTopBar/>}
            <div className = "container" id = {`root-content-wrapper${mobTag}`}>
                <div id = {`biography-blurb${mobTag}`}> 
                    <img src = {bioPic} alt = "Chase Coble" />
                    <p>
                        My name is Chase Coble, and I am a full stack developer from Salina, Kansas. I am incredibly passionate about learning, problem solving, and the future of all the sciences, especially Computer Sciences. At this time I am adept with ReactJS, Javascript, Python and HTML. My next goals are learning PyTorch for Machine Learning and AWS for cloud management.
                    </p> 
                </div>
                <div id = {`portfolio-wrapper${mobTag}`}> <PortfolioContainer /> </div>
            </div>
        </div> 
        

    )
}