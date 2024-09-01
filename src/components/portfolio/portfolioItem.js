import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkSquare } from "@fortawesome/free-solid-svg-icons";
import IframeItem from "./IframeItem";
import TwoColumnItem from "./TwoColumnItem";
import DataScienceItem from "./DataScienceItem";



export default function PortfolioItem(props) {
  const { title, description, category, imgURL, volId, iframe, leftMarginConstant} = props.item;
  console.log("Portfolio Item props init ");
  console.log(props);
  const [isOpen, setIsOpen] = useState(false);
  const mediaMatch = window.matchMedia('(max-aspect-ratio : 1.05 )')
  const [matches, setMatches ] = useState(mediaMatch.matches);
  useEffect(() => {
    const handler = e => setMatches(e.matches);
    mediaMatch.addEventListener("change", handler);
    return () => mediaMatch.removeEventListener("change", handler);
  })
  function orientationQuery() {
    if (matches === true) {
      const portraitStyle = {
        marginLeft: `${leftMarginConstant * 9}%`
      }
      return portraitStyle;
    } else {
      const landscapeStyle = {
        marginLeft: `${leftMarginConstant * 7}%`,
        borderLeft: '1px dotted black'
      }
      return landscapeStyle;
    }
  }
  
  

  
  const briefDescription = description.substring(0, description.indexOf('.'));
  const nameFormatter = (name) => {
    let nameClip = '';
    name = name.split(' ').join('\u00b7')
    if (name.length === 8) {
      nameClip = name;
      } else if (name.length < 8) {
        const repetitionConstant = 8 - name.length;
      if (name.length % 2 === 0) {
      nameClip = '\u00b7'.repeat(repetitionConstant / 2) + name + '\u00b7'.repeat(repetitionConstant / 2);
      } else {
      nameClip = '\u00b7'.repeat(Math.floor(repetitionConstant / 2 + 0.5)) + name + '\u00b7'.repeat(repetitionConstant / 2 - 0.5);
      }
    } else if (name.length > 8) {
    nameClip = name.slice(0, 8);
    } else {
      console.log('name formatting error');
   }
  return nameClip;
  };
  const volumeId = volId;
  const handleOnClick = () => {
    ("Handle on click");
    setIsOpen(true);
  };

  

  const closeModal = () =>{
    ("Modal closed");
    setIsOpen(false);
  };
  
  return (
    <div
      className={`${category} portfolio-item-wrapper`}
      id={`'portfolio-item' + ${volumeId}`}
      
      data-left-margin-constant = {leftMarginConstant}
      style = {orientationQuery()} 
    >
      <div className = "portfolio-item-menuwrapper menu">
        <div className="menu-content">
          <div className = "preview-name">
            <h2>{title}</h2>
          </div>
          <div className="preview-image">
            <img className="preview-image" alt= "imagethumb" src={imgURL} />
          </div>
          <div className="preview-desc">
            <p>{briefDescription}</p>
          </div>
        </div>
      </div>
      <div className="portfolio-binder-wrapper" onClick={handleOnClick}>
        <div className="volume-id"></div>
        <div className="portfolio-item-name"> {nameFormatter(title)}</div>
      </div>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className={'portfolio-item-content-wrapper'}
        shouldCloseOnEsc={true}
        role="See More Information"
      >
        <div className = "portfolio-modal-wrapper">
            <div className = "portfolio-item-modal-exit">
                <span style={{color: 'inherit'}} onClick = {closeModal} className = "clickable" ><FontAwesomeIcon icon={faXmarkSquare}  /></span>
            </div>
            {(iframe) ?
              <IframeItem props = {props}/> :
              (category === "Data Science")?
                <DataScienceItem props = {props}/> :
                <TwoColumnItem props = {props} />
          }
             
        </div>  
      </ReactModal>
    </div>
  )
}
