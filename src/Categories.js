import React from "react";

const Categories = ({ filterItems, categories }) => {
  debugger;
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            key={index}
            className="filter-btn"
            onClick={() => filterItems({category})}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
