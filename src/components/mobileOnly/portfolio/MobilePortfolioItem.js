import { useState } from "react";
import React from "react";


export default function MobilePortfolioItem(props) {
    const [ blur, setEmph ] = useState('');
    const { title, category, imgURL, language} = props.item;
    const nameBrief=
        title.substring(0, 10).split(' ').join('\u00b7');
        
    function handleMouseEnter(){
        setEmph('Emph');
    } 
    function handleMouseLeave(){
        setEmph('');
    }
    return(
        <div className={`mobile-portfolio-item ${blur}`}
           onMouseEnter={()=> handleMouseEnter()}
           onMouseLeave={()=> handleMouseLeave()}
           style={{backgroundImage: `url(${imgURL})`}}>
            <div className="img-text-wrapper">    
                <div className="mobile-portfolio-item-category">{category}</div>
                <div className="mobile-portfolio-item-name">{nameBrief}</div>
                <div className="mobile-porfolio-item-language">{language}</div>
            </div>
        </div>
    )
}