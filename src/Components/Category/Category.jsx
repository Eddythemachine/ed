import React from "react";
import CategoryContainer from "../Category-container/CategoryContainer";
import "./Category.scss";

function Category({ objects }) {
  // const { objects } = this.props;
  return (
    <div>
      <CategoryContainer objects={objects} />
    </div>
  );
}

export default Category;
