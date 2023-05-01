import { useState } from "react";
import React from "react";


export default function MobilePortfolioItem(props) {
    const [ blur, setEmph ] = useState('');
    const { name, category, description, thumb_image_url} = props.item;
    const descriptionBrief = description.substring(0, 8);
    const nameBrief=
        name.substring(0, 10).split(' ').join('\u00b7');
        
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
           style={{backgroundImage: `url(${thumb_image_url})`}}>
            <div className="img-text-wrapper">    
                <div className="mobile-portfolio-item-category">{category}</div>
                <div className="mobile-portfolio-item-name">{nameBrief}</div>
                <div className="mobile-portfolio-item-description">{descriptionBrief}</div>
            </div>
        </div>
    )
}