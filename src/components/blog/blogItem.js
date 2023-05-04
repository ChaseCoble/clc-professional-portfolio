import React, {useState} from "react";
import ReactModal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkSquare } from "@fortawesome/free-solid-svg-icons";

export default function BlogItem(props) {
    const {title, content, featured_image_url, gridArea, angle } = props.item;
    const [isOpen, setIsOpen] = useState(false);
    const briefContent = content.substring(0, 9);
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
                <div className="blog-item-toprow">
                    <div className = "blog-item-title-wrapper">
                        <div className = "blog-item-title">
                            <h1 className = "plaque">{title}</h1>
                        </div>
                    </div>
                    <div className = "blog-item-modal-exit">
                        <a style={{color: 'inherit'}} onClick = {handleExitClick} className = "clickable" href= {"/blog"}><FontAwesomeIcon icon={faXmarkSquare}  /></a>
                    </div>
                </div>
                <div className="blog-featured-image-wrapper">
                    <img alt = "See more data" src={featured_image_url} />
                </div>
                <div className="blog-item-content-modal">
                    <p> {content} </p>
                </div>
            </ReactModal>
        </div>
    )
}