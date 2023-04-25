import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";

export default function PortfolioItem(props) {
  const { name, description, url, category, thumb_image_url, volId, leftMarginConstant, logo_url } = props.item;
  console.log("portfolio item mounted");
  console.log("portfolio item", props.item)
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
  
  console.log(volId, leftMarginConstant)
  const volumeId = volId;
  const romans = require("romans");
  console.log("Id to be romanized", volumeId)
  const romanVolumeId = romans.romanize(volumeId);
  console.log(name)

  
  
  const nameFormatter = (name) => {
    let nameClip = '';
    name = name.split(' ').join('\u00b7')
    if (name.length === 8) {
      nameClip = name;
      } else if (name.length < 8) {
        const repetitionConstant = 8 - name.length;
      if (name.length % 2 === 0) {
      nameClip = '\u00b7'.repeat(repetitionConstant / 2) + name + '\u00b7'.repeat(repetitionConstant / 2);
      console.log(nameClip)
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
            <h2>{name}</h2>
          </div>
          <div className="preview-image">
            <img className="preview-image" alt= "imagethumb" src={thumb_image_url} />
          </div>
          <div className="preview-desc">
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className="portfolio-binder-wrapper">
        <div className="volume-id"> {romanVolumeId}</div>
        <div className="portfolio-item-name"> {nameFormatter(name)}</div>
      </div>
      <ReactModal
        isOpen={isOpen}
        className={'portfolio-item-content-wrapper'}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        role="See More Information"
      >
            <div className="portfolio-item-toprow">
                <div className = "name-url-wrapper">
                  <div className = "portfolio-item-name">
                    <h1>{name}</h1>
                  </div>
                  <div className = "portfolio-item-url">
                    <a href={url}>Project Link</a>
                  </div>
                  <div className = "portfolio-repo-url">
                    <a href={logo_url}>Repository Link</a>
                  </div>
                </div>
                <div className = "portolio-item-modal-exit">
                    <p onClick= {closeModal} class = "clickable"> Return to home screen </p>
                </div>
            </div>
            <div className="portfolio-thumb-wrapper">
                <img alt = "See more data" src={thumb_image_url} />
            </div>
            <div className="portfolio-item-content">
                <p> {description} </p>
            </div>
        </ReactModal>
    </div>
  )
}