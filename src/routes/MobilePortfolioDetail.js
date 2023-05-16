import React from "react";
import MobileTopBar from "../components/mobileOnly/components/MobileTopBar";
import { useEffect, useState, useCallback} from "react";
import LoadingScreen from "../components/loading";
import { useParams } from "react-router-dom"

export default function MobilePortfolioDetail() {
    const [portfolioItem, setPortfolioItem] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    
    const fetchPortfolioItem = useCallback(async () => {
        try {
            const response = await fetch(`https://professional-site-backend.herokuapp.com/portfolio/get/${id}`, {
                method: "GET",
                mode: "cors",
                cache: "no-cache"
        });
        const data = await response.json();
        setPortfolioItem(data);
        setIsLoading(false);
            } catch (error) {
             console.error(error);
        }
    }, [id])
    useEffect(() => {
        
    fetchPortfolioItem();
      }, [fetchPortfolioItem]);
    const {name, url, description, thumb_image_url} = portfolioItem || {};
    return(
        <div className = "mobile-portfolio-detail-fork-wrapper">
            {isLoading === false ? (
            <div className = "mobile-portfolio-detail-wrapper">
                <MobileTopBar />
                <div id="mobile-portfolio-detail-content-wrapper">
                    <div className="mobile-portfolio-item-top">
                        <div className = "mobile-name-url-wrapper">
                            <div className = "mobile-portfolio-item-name">
                                <h1>{name}</h1>
                            </div>
                            <div className = "mobile-portfolio-item-url">
                                <a href={url}>Project Link</a>
                            </div>
                        </div>     
                    </div>
                    <div className="mobile-portfolio-item-picture">
                    <a href = {thumb_image_url} className = "clickable"><img alt = "Website screenshot" src={thumb_image_url} /></a>
                    </div>
                    <div className="mobile-portfolio-description">
                        <p> {description} </p>
                    </div>
                </div>
            </div> 
            ) : (<LoadingScreen />
            )}
        </div>
    )
}