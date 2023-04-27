import React, {useState} from "react";

export default function MobileBlogItem(props){
    const {title, content, featured_image_url} = props.item;
    const [blur, setBlur] = useState(false);
    const briefContent = content.substring(0, content.indexOf('.'));
    function handleMouseEnter(){
        setBlur('blur');
    } 
    function handleMouseLeave(){
        setBlur('');
    }
    return(
        <div className="mobile-blog-item" 
            style = {{backgroundImage : `url(${featured_image_url})`}}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <div className="mobile-blog-item-title">
                {title}
            </div>
            <div className="mobile-blog-item-content">
                {briefContent}
            </div>
        </div>
    )
}