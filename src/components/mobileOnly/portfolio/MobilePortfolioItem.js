import { useState } from "react";
import React from "react";


export default function MobilePortfolioItem(props) {
    const [ blur, setBlur ] = useState('');
    const { name, category, description, thumb_image_url, } = props.item;
    const descriptionBrief = description.substring(0, description.indexOf("."));
    function handleMouseEnter(){
        setBlur('blur');
    } 
    function handleMouseLeave(){
        setBlur('');
    }
    return(
        <div className={`mobile-portfolio-item ${blur}`}
           onMouseEnter={()=> handleMouseEnter()}
           onMouseLeave={()=> handleMouseLeave()}
           style={{backgroundImage: `url(${thumb_image_url})`}}>
            <div className="img-text-wrapper">    
                <div className="mobile-portfolio-item-category">{category}</div>
                <div className="mobile-portfolio-item-name">{name}</div>
                <div className="mobile-portfolio-item-description">{descriptionBrief}</div>
            </div>
        </div>
    )
}