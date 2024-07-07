import React from "react";
import { useState, useCallback } from "react";
import MobilePortfolioItem from "./mobilePortfolioItem";
import { Link } from "react-router-dom";

export default function MobilePortfolio(props) {
  const [portfolioItems, setPortfolioItems] = useState(props.items);

  const handleFilter = useCallback(
    (filter) => {
      setPortfolioItems((prevItems) => {
        let filteredItems = props.items;
        if (filter !== "All") {
          filteredItems = props.items.filter(
            (item) => item.category === filter
          );
        }
        return filteredItems;
      });
    },
    [props.items]
  );

  function getMobilePortfolioItems() {
    return portfolioItems.map((item) => {
      return (
        <Link key={item.id * 2} to={`/m/portfolio/${item.id}`}>
          <MobilePortfolioItem item={item} />
        </Link>
      );
    });
  }

  return (
    <div id="mobile-portfolio-wrapper">
      <div className="mobile-portfolio-header plaque">My Portfolio</div>
      <div className="mobile-filter-button-wrapper">
        <button
          className="btn filter-button"
          onClick={() => handleFilter("Web")}
          type="button"
        >
          Web
        </button>
        <button
          className="btn filter-button"
          onClick={() => handleFilter("Software")}
          type="button"
        >
          Software
        </button>
        <button
          className="btn filter-button"
          onClick={() => handleFilter("Data")}
          type="button"
        >
          Data
        </button>
        <button
          className="btn filter-button"
          onClick={() => handleFilter("Articles")}
          type="button"
        >
          Articles
        </button>
        <button
          className="btn filter-button"
          onClick={() => handleFilter("All")}
          type="button"
        >
          Show All
        </button>
      </div>
      <div className="mobile-portfolio-items-wrapper">
        {getMobilePortfolioItems()}
      </div>
    </div>
  );
}
