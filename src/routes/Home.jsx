import React from "react";
// import "./categories.styles.scss";
import Category from "../Components/Category/Category";

const objects = [
  {
    heading: "Fancy Glass Cup",
    subHeading: "Shop now",
    id: 1,
    bgImg: "./img/glass-cup.jpg",
  },
  {
    heading: "Knives",
    subHeading: "Shop now",
    id: 2,
    bgImg: "./img/knives-set.jpg",
  },
  {
    heading: "Fridge",
    subHeading: "Shop now",
    id: 3,
    bgImg: "./img/fridge.jpg",
  },
  {
    heading: "Kitchen Rack",
    subHeading: "Shop now",
    id: 4,
    bgImg: "./img/kitchen-rack.jpg",
  },
  {
    heading: "Palour Lamp",
    subHeading: "Shop now",
    id: 5,
    bgImg: "./img/parlour-lamp.jpg",
  },
];

function Home() {
  return (
    <div className="div">
      <Category objects={objects} />
    </div>
  );
}

export default Home;
