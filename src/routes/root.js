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
                        My name is Chase Coble, and I am a data science developer from Hays, Kansas. I am incredibly passionate about learning, problem solving, and the future of all the sciences, especially Computer Sciences. After 3 years of Computer Science education, I am conversant with most imperative languages, and working on learning how to handle functional languages like SML. I have one year of my Bachelor's degree and it includes two Master's level courses. I also want to emphasize that this portfolio is not the most recent demonstration of my abilities, I am working on a new portfolio that utilizes the NextJS/FastAPI/Postgressql tech stack!
                    </p> 
                </div>
                <div id = {`portfolio-wrapper${mobTag}`}> <PortfolioContainer /> </div>
            </div>
        </div> 
        

    )
}