import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import PortfolioModal from "./PortfolioModal";


export default function PortfolioItem(props) {
  const { title, description, category, imgURL, volId, leftMarginConstant} = props.item;
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
  
  const volumeId = volId;
  const romans = require("romans");
  const romanVolumeId = romans.romanize(volumeId);

  
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

  const handleOnClick = () => {
    setIsOpen(true);
  };

  

  const closeModal = () => {
    setIsOpen(false);
  };
  
  return (
    <div
      className={`${category} portfolio-item-wrapper`}
      id={`'portfolio-item' + ${volumeId}`}
      onClick={handleOnClick}
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
      <div className="portfolio-binder-wrapper">
        <div className="volume-id"> {romanVolumeId}</div>
        <div className="portfolio-item-name"> {nameFormatter(title)}</div>
      </div>
      <ReactModal
        isOpen={isOpen}
        className={'portfolio-item-content-wrapper'}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        role="See More Information"
      >
        <PortfolioModal closingFunction = {closeModal} item = {props.item} />
      </ReactModal>
    </div>
  )
}