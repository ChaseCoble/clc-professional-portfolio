import React from "react";
import TopBar from "../components/TopBar";
import PortfolioContainer from "../components/PortfolioContainer";

export default function Root() {
    return (
        <div className = "container" id = "root-wrapper">
            <TopBar/>
            <div className = "container" id = "root-content-wrapper">
                <div id = "biography-blurb"> 
                    <p>
                        My name is Chase Coble, and I am a full stack developer from Salina, Kansas. I am incredibly passionate about learning, problem solving, and the future of all the sciences, especially Computer Sciences. At this time I am adept with ReactJS, Javascript, Python and HTML. My next goals are learning PyTorch for Machine Learning and AWS for cloud management.
                    </p> </div>
                <div id = "portfolio-wrapper"> <PortfolioContainer /> </div>
                <div id = "nav-drop-holder" />
            </div>
            <div id = "footer-wrapper"> Footer </div>
        </div> 
        

    )
}