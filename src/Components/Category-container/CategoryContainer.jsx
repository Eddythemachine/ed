import React from "react";

function CategoryContainer({ objects }) {
  return (
    <div className="categories-container">
      {objects.map(({ heading, subHeading, id, bgImg }) => {
        return (
          <div key={id} className="category-container">
            <div
              className="background-img"
              style={{
                backgroundImage: `url(${bgImg})`,
              }}
            ></div>
            {/* <img src="" alt="" /> */}
            <div className="category-body-container">
              <h2>{heading}</h2>
              <p>{subHeading} </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CategoryContainer;
