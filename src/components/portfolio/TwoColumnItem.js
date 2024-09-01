import React from "react";
import { Fragment } from "react";

export default function TwoColumnItem(props){
    console.log(props);
    console.log("Two column init");
    const { title, description, imgURL, repoURL, projectURL, language, languagedetail, date} = props.item;
    return(
        <Fragment>
            <div className = "project-item-right-column">
                <p className = "project-item-title">{title}</p>
                <p className = "project-item-date">{date}</p>
                <p className = "project-item-language">{language}</p>
                <p className = "project-item-languagedetail">{languagedetail}</p>
                <p className = "project-item-description">{description}</p>
            </div>
            <div className = "project-item-left-column">
                <div className = "project-item-links-wrapper">
                    {(projectURL !== repoURL) ?
                        <Fragment>
                            <div className = "project-item-link-wrapper link">    
                                <a href={projectURL} className = "link">Project Link</a>
        
                            </div>
                            <div className = "project-item-repo-link-wrapper">
                                <a href={repoURL} className = "link">Repository Link</a>
                            </div>
                        </Fragment> :
                        <Fragment>
                            <div className = "project-item-sole-link-wrapper">
                                <a className = "link" href={projectURL}>Repository Link</a>
                            </div>
                        </Fragment>}
                    </div>
                <img className = "project-item-image" src = {imgURL} alt = "concepts of project demonstrated"/>
            </div>

        </Fragment>
    )
}