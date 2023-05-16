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
      var reactComparator = 0;
      var pythonComparator = 0;
      var hobbiesComparator = 0;
      var projectsComparator = 0;
      var leftMarginConstant = 0;
      var volId = 0;
      for (let portfolioItem of portfolioItems) {
        switch(portfolioItem.category) {
          case "React":            
            leftMarginConstant = reactComparator;
            reactComparator = reactComparator + 1;
            volId = reactComparator;
            portfolioItem.leftMarginConstant = leftMarginConstant;
            portfolioItem.volId = volId;
            break;
          case "Python":
            leftMarginConstant = pythonComparator;
            pythonComparator = pythonComparator + 1;
            volId = pythonComparator;
            portfolioItem.leftMarginConstant = leftMarginConstant;
            portfolioItem.volId = volId;
            break;
          case "Hobbies":
            leftMarginConstant = hobbiesComparator;
            hobbiesComparator = hobbiesComparator + 1;
            volId = hobbiesComparator;
            portfolioItem.leftMarginConstant = leftMarginConstant;
            portfolioItem.volId = volId;
            break;
          case "Projects":
            leftMarginConstant = projectsComparator;
            projectsComparator = projectsComparator + 1;
            volId = projectsComparator;
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
                <div className="plaque-contents">React</div>
              </div> 
            </div>
            <div id="portfolio-body-rail-2" className="shelf-hor">
              <div id="portfolio-body-rail-2-plaque" className="plaque">
                <div className="plaque-contents">Python</div>
              </div>
            </div>
            <div id="portfolio-body-rail-3" className="shelf-hor">
              <div id="portfolio-body-rail-3-plaque" className="plaque">
                <div className="plaque-contents">Projects</div>
              </div>
            </div>
            <div id="portfolio-bookhole-1" className="bookhole React" />
            <div id="portfolio-bookhole-2" className="bookhole Python" />
            <div id="portfolio-bookhole-3" className="bookhole Project" />
            <div id="portfolio-bookhole-4" className="bookhole Hobbies" />
            {getPortfolioItems()}
          </div>
          <div id="portfolio-container-bottombar" className="shelf-hor">
            <div id="portfolio-body-4-placard" className="plaque">
              <div className="plaque-contents">Hobbies</div>
            </div>
          </div> 
        </div>
      : <MobilePortfolio items = {portfolioItems} />
    : <LoadingScreen />
  }
</div>
  )
}
