import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/topbar/topBar";
import PortfolioContainer from "../components/portfolio/portfolioContainer";
import bioPic from "../helper/images/biography/bioBlurb.jpg";
import {mobContext} from "../index";
import MobileTopBar from "../components/mobileOnly/components/mobileTopBar";

export default function Root() {
    const isMob = useContext(mobContext);
    const mobTag = (isMob === true) ? "-mobile" : "";
    const navigate = useNavigate();
    const selfDestruct = () => {
        // eslint-disable-next-line no-restricted-globals
        const firstConfirmation = confirm("Are you sure you want to blow up all my hard work?");
        if (firstConfirmation) {
            // eslint-disable-next-line no-restricted-globals
            const secondConfirmation = confirm("You would really do that to me?");
                if (secondConfirmation) {
                    navigate("/error/1");
                } else {
                    alert("Oh god thank you...You scared me.");
                }
            } else {
                alert("Thank you kind person. I've worked so hard on this.");
            }
        };
    return (
        <div className = "container" id = "root-wrapper">
            {isMob === false ? <TopBar/> : <MobileTopBar/>}
            <div className = "container" id = {`root-content-wrapper${mobTag}`}>
                <div id = {`biography-blurb${mobTag}`}> 
                    <img src = {bioPic} alt = "Chase Coble" />
                    <button className = "self-destruct-button" onClick = {selfDestruct}>
                        Self Destruct Button
                    </button>
                    <p>
                        My name is Chase Coble, and I am a data science developer from Hays, Kansas. I am incredibly passionate about learning, problem solving, and the future of all the sciences, especially Computer Sciences. After 3 years of Computer Science education, I am conversant with most imperative languages, and working on learning how to handle functional languages like SML. I have one year of my Bachelor's degree and it includes two Master's level courses. I also want to emphasize that this portfolio is not the most recent demonstration of my abilities, I am working on a new portfolio that utilizes the NextJS/FastAPI/Postgressql tech stack!
                    </p> 
                </div>
                <div id = {`portfolio-wrapper${mobTag}`}> <PortfolioContainer /> </div>
            </div>
        </div> 
        

    )
}