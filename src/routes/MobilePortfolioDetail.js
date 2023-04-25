import React from "react";
import MobileTopBar from "../components/mobileOnly/components/MobileTopBar";
import { useEffect, useState} from "react";
import LoadingScreen from "../components/loading";
import { useParams } from "react-router-dom"

export default function MobilePortfolioDetail() {
    const [portfolioItem, setPortfolioItem] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    console.log("mobile portfolio detail mounted");
    useEffect(() => {
        const fetchPortfolioItem = async () => {
            try {
                const response = await fetch(`https://chasecoble.devcamp.space/portfolio/portfolio_items/${id}`, {
                    method: "GET",
                    mode: "cors",
                    cache: "no-cache"
        });
        const data = await response.json();
        console.log("portfolio item data" + {portfolioItem})
        setPortfolioItem(data.portfolio_item);
        setIsLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
    fetchPortfolioItem();
      }, [id]);
    const {name, url, logo_url, description, thumb_image_url} = portfolioItem || {};
    return(
        <div className = "mobile-portfolio-detail-fork-wrapper">
            {isLoading === false ? (
            <div className = "mobile-portfolio-detail-wrapper">
                <MobileTopBar />
                <div id="mobile-portfolio-detail-content-wrapper">
                    <div className="mobile-portfolio-item-left">
                        <div className = "mobile-name-url-wrapper">
                            <div className = "mobile-portfolio-item-name">
                                <h1>{name}</h1>
                            </div>
                            <div className = "mobile-portfolio-item-url">
                                <a href={url}>Project Link</a>
                            </div>
                            <div className = "mobile-portfolio-repo-url">
                                <a href={logo_url}>Repository Link</a>
                            </div>
                        </div>
                        <div className="portfolio-item-content">
                            <p> {description} </p>
                        </div>
                    </div>
                    <div className="mobile-portfolio-item-right">
                        <img alt = "Website screenshot" src={thumb_image_url} />
                    </div>
                </div>
            </div> 
            ) : (<LoadingScreen />
            )}
        </div>
    )
}