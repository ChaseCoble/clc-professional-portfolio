import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkSquare } from "@fortawesome/free-solid-svg-icons";

export default function BlogModal(props){
    const {title, content, flavorImgURL, date, refURL} = props.item;
    function exitClick() {
        props.closingFunction()
    }
    return(
        <div className = "blog-modal-wrapper">
            <div className = "blog-item-modal-exit">
                <a style={{color: 'inherit'}} onClick = {exitClick} className = "clickable" href= {"/blog"}><FontAwesomeIcon icon={faXmarkSquare}  /></a>
            </div>
            <div className = "blog-item-title">
                <h1 className = "plaque">{title}</h1>
            </div>
            <div className = "blog-modal-date">
                {date}
            </div>
            <div className="blog-featured-image-wrapper">
                <img alt = "See more data" src={flavorImgURL} />
            </div>
            <div className="blog-item-content-modal">
                <p className = "blog-modal-content">    
                    {content} 
                </p>
                <p className = "blog-ref-url">
                    <a className = "ref-url" href = {refURL}> Reference Link </a>
                </p>
            </div>
        </div>
    )
}