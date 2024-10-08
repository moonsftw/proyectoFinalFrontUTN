import React from "react";
import "./ButtonList.css";
const ButtonList = ({ categories, filterCategory }) => {
  return (
    <div className="categories">
      {categories.map((category) => {
        return (
          
            <button
              type="button"
              className="btn-category"
              onClick={() => filterCategory(category)}
              key={category}
            >
              {category}
            </button>
          
        );
      })}
    </div>
  );
};

export default ButtonList;
