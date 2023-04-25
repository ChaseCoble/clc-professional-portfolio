import React, {useState, useEffect} from "react";

export default function BlogItem(props) {
    const {title, content} = props.item;
    return(
        <div className="blog-item-wrapper">
            {title}
            {content}
        </div>
    )
}