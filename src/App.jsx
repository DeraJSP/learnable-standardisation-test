import { useState } from "react";
import LandingPage from "./pages/landing_page/LandingPage";
import ProductsList from "./pages/landing_page/ProductsList";
import ProductDetails from "./pages/landing_page/ProductDetails";
import Cart from "./pages/cart/Cart";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/product/:id",
    element: <ProductDetails />,
  },
  {
    path: "/Cart",
    element: <Cart />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>

    // <Router>
    //   <>
    //     <Routes>
    //       <Route exact path="/" element={<LandingPage />}></Route>{" "}
    //       <Route path="/product/:id" element={<ProductDetails />} />
    //     </Routes>
    //   </>
    // </Router>
  );
}

export default App;
