import React, {useState} from "react";
import ReactModal from "react-modal";
import BlogModal from "../blog/blogModal"


export default function BlogItem(props) {
    const {title, content, gridArea, angle } = props.item;
    const [isOpen, setIsOpen] = useState(false);
    const briefContent = content.substring(0, 30);
    const dynamicStyle = {
        gridArea: `g${gridArea}`,
        transform: `rotate(${angle}deg)`
    };
    const handleOnClick = () => {
        setIsOpen(true);
      };
    
      
    
    const handleExitClick = () => {
        setIsOpen(false)
    }
    return(
        <div className="blog-item-wrapper clickable" style={dynamicStyle} onClick = {handleOnClick}>
            <div className="blog-title-wrapper">{title}</div>
            <div className="blog-content-wrapper">{briefContent}</div>
            <ReactModal
                isOpen={isOpen}
                className={'blog-item-content-wrapper'}
                shouldCloseOnEsc={true}
                role="See More Information"
            >
                <BlogModal closingFunction = {handleExitClick} item = {props.item} />
            </ReactModal>
        </div>
    )
}
