import React, { useState, useEffect, useContext } from "react";
import PortfolioItem from "./PortfolioItem";
import LoadingScreen from "../loading";
import MobilePortfolio from "../mobileOnly/portfolio/MobilePortfolio"
import { mobContext } from "../../index";

export default function PortfolioContainer() {
    const [portfolioItems, setPortfolioItems] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const isMob = useContext(mobContext);
    const mobTag = (isMob === true) ? "-mobile" : "";

    useEffect(() => {
      const fetchPortfolioItems = async () => {
        try {
          const response = await fetch("https://professional-site-backend.herokuapp.com/portfolio/get", {
            method: "GET",
            mode: "cors",
            cache: "no-cache"
          });
          const data = await response.json();
          setPortfolioItems(data);
          setIsLoading(false)
        } catch (error) {
          console.error(error);
        }
      };
      fetchPortfolioItems();
    }, []);
    
    function getPortfolioItems() {
      var frontComparator = 0;
      var backComparator = 0;
      var softwareComparator = 0;
      var datascienceComparator = 0;
      var leftMarginConstant = 0;
      var volId = 0;
      for (let portfolioItem of portfolioItems) {
        switch(portfolioItem.category) {
          case "FrontendWeb":            
            leftMarginConstant = frontComparator;
            frontComparator = frontComparator + 1;
            volId = frontComparator;
            portfolioItem.leftMarginConstant = leftMarginConstant;
            portfolioItem.volId = volId;
            break;
          case "BackendWeb":
            leftMarginConstant = backComparator;
            backComparator = backComparator + 1;
            volId = backComparator;
            portfolioItem.leftMarginConstant = leftMarginConstant;
            portfolioItem.volId = volId;
            break;
          case "SoftwareDev":
            leftMarginConstant = softwareComparator;
            softwareComparator = softwareComparator + 1;
            volId = softwareComparator;
            portfolioItem.leftMarginConstant = leftMarginConstant;
            portfolioItem.volId = volId;
            break;
          case "DataScience":
            leftMarginConstant = datascienceComparator;
            softwareComparator = datascienceComparator + 1;
            volId = datascienceComparator;
            portfolioItem.leftMarginConstant = leftMarginConstant;
            portfolioItem.volId = volId;
            break;  
          default: console.log("Error modifying properties on portfolioItems", portfolioItems)

        }
      }
      
      return (
        portfolioItems.map((portfolioItem) => (
            <PortfolioItem key={portfolioItem.id} item={portfolioItem} />
        )))
  }

  return (
    <div id={`portfolio-fork-wrapper${mobTag}`}>
  {isLoading === false
    ? isMob === false
      ? <div id="portfolio-container-wrapper">
          <div id="portfolio-container-topbar" className="shelf-hor">
            <div id="portfolio-title-placard" className="plaque">
              <div className='plaque-contents'>My Portfolio </div>
            </div> 
          </div>
          <div id="portfolio-sidebar-left" className="shelf-vert" />
          <div id="portfolio-sidebar-right" className="shelf-vert" />
          <div id="portfolio-body">
            <div id="portfolio-body-rail-1" className="shelf-hor">
              <div id="portfolio-body-rail-1-plaque" className="plaque">
                <div className="plaque-contents">Front End Web Development</div>
              </div> 
            </div>
            <div id="portfolio-body-rail-2" className="shelf-hor">
              <div id="portfolio-body-rail-2-plaque" className="plaque">
                <div className="plaque-contents">Back End Web Development</div>
              </div>
            </div>
            <div id="portfolio-body-rail-3" className="shelf-hor">
              <div id="portfolio-body-rail-3-plaque" className="plaque">
                <div className="plaque-contents">Software Development</div>
              </div>
            </div>
            <div id="portfolio-bookhole-1" />
            <div id="portfolio-bookhole-2" />
            <div id="portfolio-bookhole-3" />
            <div id="portfolio-bookhole-4" />
            {getPortfolioItems()}
          </div>
          <div id="portfolio-container-bottombar" className="shelf-hor">
            <div id="portfolio-body-4-placard" className="plaque">
              <div className="plaque-contents">Data Science and Machine Learning</div>
            </div>
          </div> 
        </div>
      : <MobilePortfolio items = {portfolioItems} />
    : <LoadingScreen />
  }
</div>
  )
}
