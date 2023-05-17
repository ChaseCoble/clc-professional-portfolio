import React, {useState} from "react";

export default function MobileBlogItem(props){
    const {title, content, flavorImgURL} = props.item;
    const [Emph, setEmph] = useState(false);
    const briefContent = content.substring(0, content.indexOf('.'));
    function handleMouseEnter(){
        setEmph('Emph');
    } 
    function handleMouseLeave(){
        setEmph('');
    }
    return(
        <div className={`mobile-blog-item ${Emph}`}
            style = {{backgroundImage : `url(${flavorImgURL})`}}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <div className="mobile-blog-item-title shared-bg">
                {title}
            </div>
            <div className="mobile-blog-item-content shared-bg">
                {briefContent}
            </div>
        </div>
    )
}