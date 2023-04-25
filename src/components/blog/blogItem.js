import React from "react";

export default function BlogItem(props) {
    const {title, content, gridArea, angle } = props.item;
    const briefContent = content.substring(0, (content.indexOf('.') !== -1) ? content.indexOf('.') : 9);
    console.log(angle);
    const dynamicStyle = {
        gridArea: `g${gridArea}`,
        transform: `rotate(${angle}deg)`
    };
    console.log(briefContent);
    return(
        <div className="blog-item-wrapper" style={dynamicStyle}>
            <div className="blog-title-wrapper">{title}</div>
            <div className="blog-content-wrapper">{briefContent}</div>
        </div>
    )
}