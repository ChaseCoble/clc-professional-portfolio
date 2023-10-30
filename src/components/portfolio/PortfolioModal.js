import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkSquare } from "@fortawesome/free-solid-svg-icons";

export default function PortfolioModal(props){
    const { title, description, projectURL, repoURL, language, languagedetail, imgURL, date} = props.item;
    const handleExitClick = () => {
        props.closingFunction();
    }
    return(
        <div className = "portfolio-modal-wrapper">
            <div className = "portfolio-item-modal-name">
                <h1>{title}</h1>
                <p>{language}</p>
                <p>{languagedetail}</p>
            </div>
            <div className = "portfolio-item-modal-exit">
                <span style={{color: 'inherit'}} onClick = {handleExitClick} className = "clickable" href=""><FontAwesomeIcon icon={faXmarkSquare}  /></span>
            </div>
            
             {(projectURL !== repoURL) ?
                <div className = "links-wrapper">
                    <div className = "project-link-wrapper">    
                        <a href={projectURL}>Project Link</a>
                    </div>
                    <div className = "repo-link-wrapper">
                        <a href={repoURL}>Repository Link</a>
                    </div>
                </div> :
                <div className = "sole-link-wrapper">
                    <a href={projectURL}>Repository Link</a>
                </div>}
            <div className="portfolio-thumb"><img alt = "See more data" src={imgURL} /></div>
            <div className="portfolio-item-content">
                <p className = "portfolio-modal-date">
                    {date}
                </p>
                <p className = "portfolio-modal-content">
                    {description}
                </p>
            </div>  
        </div>
    )
}