import React from "react";
import MobileTopBar from "../components/mobileOnly/components/MobileTopBar";
import { useEffect, useState, useCallback} from "react";
import LoadingScreen from "../components/loading";
import { useParams } from "react-router-dom";
import backendURL from "../helper/url";

export default function MobilePortfolioDetail() {
    const [portfolioItem, setPortfolioItem] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    
    const fetchPortfolioItem = useCallback(async () => {
        try {
            const response = await fetch(backendURL + `/portfolio/get/${id}`, {
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
    const {title, projectURL, description, imgURL,  repoURL, date} = portfolioItem || {};
    return(
        <div className = "mobile-portfolio-detail-fork-wrapper">
            {isLoading === false ? (
            <div className = "mobile-portfolio-detail-wrapper">
                <MobileTopBar />
                <div id="mobile-portfolio-detail-content-wrapper">
                    <div className="mobile-portfolio-item-top">
                        <div className = "mobile-name-url-wrapper">
                            <div className = "mobile-portfolio-item-name">
                                <h1>{title}</h1>
                            </div>
                            <div className = "mobile-portfolio-item-date">
                                {date}
                            </div>
                            <div className = "mobile-portfolio-item-url-wrapper">
                                {(projectURL !== repoURL) ?
                                    <div className = "mobile-links-wrapper">
                                        <div className = "mobile-project-link-wrapper">    
                                            <a href={projectURL}>Project Link</a>
                                        </div>
                                        <div className = "mobile-repo-link-wrapper">
                                            <a href={repoURL}>Repository Link</a>
                                        </div>
                                    </div> :
                                <div className = "mobile-sole-link-wrapper">
                                    <a href={projectURL}>Repository Link</a>
                                </div>}
                            </div>
                        </div>     
                    </div>
                    <div className="mobile-portfolio-item-picture">
                    <a href = {imgURL} className = "clickable"><img alt = "Website screenshot" src={imgURL} /></a>
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