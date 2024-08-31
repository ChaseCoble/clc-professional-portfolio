import React from "react";

export default function iframeItem(props){
    const { title, description, projectURL, language, date} = props.item;
    return(
        <div className = "article-item-wrapper">
            <div className = "article-item-content">
                <iframe title = "article demonstration" src = {projectURL} className = "article-content-frame" />
            </div>
            <div className = "article-item-info">
                <div className = "article-item-title">{title}</div>
                <div className = "article-item-date">{date}</div>
                <div className = "article-item-language">{language}</div>
                <div className = "article-item-description"> 
                    <p>For more controls, use the 3 dots in the frame.</p>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )

}