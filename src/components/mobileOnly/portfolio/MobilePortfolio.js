import React from "react";
import { useState, useCallback } from "react";
import MobilePortfolioItem from "./MobilePortfolioItem";
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
          onClick={() => handleFilter("React")}
          type="button"
        >
          React
        </button>
        <button
          className="btn filter-button"
          onClick={() => handleFilter("Python")}
          type="button"
        >
          Python
        </button>
        <button
          className="btn filter-button"
          onClick={() => handleFilter("Projects")}
          type="button"
        >
          Projects
        </button>
        <button
          className="btn filter-button"
          onClick={() => handleFilter("Hobbies")}
          type="button"
        >
          Hobbies
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
