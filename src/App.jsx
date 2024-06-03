import { useState } from "react";
import LandingPage from "./pages/landing_page/LandingPage";
import ProductsList from "./pages/landing_page/ProductsList";
import ProductDetails from "./pages/landing_page/ProductDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>{" "}
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
