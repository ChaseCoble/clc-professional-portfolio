import React from "react";

export default function ArticleItem(props){
    const { title, description, category, imgURL, volId, leftMarginConstant, repoURL, projectURL, language, languagedetail, date} = props.item;
    return(
        <div className = "article-item-wrapper">
            <div className = "article-item-title">
                {title}
            </div>
            <div className = "article-description">
                {description}
            </div>
            <iframe src = {repoURL} ></iframe>
        </div>
    )

}