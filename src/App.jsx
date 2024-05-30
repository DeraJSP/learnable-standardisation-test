import { useState } from "react";
import LandingPage from "./pages/landing_page/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>{" "}
        </Routes>
      </>
    </Router>
  );
}

export default App;
