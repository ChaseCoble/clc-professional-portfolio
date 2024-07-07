import React from "react";
import MobileTopBar from "../components/mobileOnly/components/mobileTopBar";
import { useEffect, useState, useCallback} from "react";
import LoadingScreen from "../components/loading";
import { useParams } from "react-router-dom";
import MobileItem from "../components/mobileOnly/portfolio/mobileItem";
import MobileDataItem from "../components/mobileOnly/portfolio/mobileDataItem";
import Error from "./error";

export default function MobilePortfolioDetail() {
    const [portfolioItem, setPortfolioItem] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    
    const fetchPortfolioItem = useCallback(async () => {
        try {
            const response = await fetch(`https://coblexdevelopment-backend-987493fde519.herokuapp.com/portfolio/get/${id}`, {
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
    const {category} = portfolioItem || {};
    return(
        <div className = "mobile-portfolio-detail-fork-wrapper">
            {isLoading === false ? (
            <div className = "mobile-portfolio-detail-wrapper">
                <MobileTopBar />
                <div id="mobile-portfolio-detail-content-wrapper">
                {(() => {
              switch (category) {
                case "Web":
                case "Software":
                case "Articles":
                  return <MobileItem item={portfolioItem} />;
                case "Data":
                  return <MobileDataItem item={portfolioItem} />;
                default:
                  return <Error item={portfolioItem} />;
                            }
                        }
                    )()
                }
                </div>
            </div>   
            ) : (<LoadingScreen />
        
            )}
        </div>
    )
}