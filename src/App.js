import React from "react";
import "./categories.styles.scss";
import Home from "./routes/Home";
import { Route, Routes } from "react-router-dom";

const shop = () => {
  return (
    <div>
      <h1>Welcome </h1>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="shop" element={<shop />} />
    </Routes>
  );
}

export default App;
