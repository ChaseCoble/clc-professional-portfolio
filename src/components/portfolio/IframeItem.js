import React from "react";
import LoadingScreen from "../loading";
import IFrameWithLoader from "./IFrameWithLoader";

const IframeItem = ({props}) =>{
    console.log(props);
    console.log("Iframe init");
    if(!props){
        return <LoadingScreen />
    }
    const {title, description, category,  projectURL, repoURL, language, date} = props.item;
    return(
        <div className = "article-item-wrapper">
            <div className = "article-item-content">
                <IFrameWithLoader src = {projectURL} />
            </div>
            <div className = "article-item-info">
                <div className = "article-item-title">{title}</div>
                <div className = "article-item-date">{date}</div>
                <div className = "article-item-language">{language}</div>
                <div className = "article-item-description description-box"> 
                    {category === "Articles" ? 
                        <p>For more controls, use the 3 dots in the frame.</p> :
                        category === "Web" ? "" :
                        <p>Click execute/run then interact with the script in the console</p>
                    }
                    <p>{description}</p>
                </div>
                {repoURL && (
                    <a className = "article-item-repo-link" href={repoURL} target="_blank" rel="noopener noreferrer">
                        View Repository
                    </a>
                )}
            </div>
        </div>
    )

};

export default IframeItem;