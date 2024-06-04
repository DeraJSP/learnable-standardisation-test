import { useGetProductDetailsQuery } from "./productsApi";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./ProductDetails.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ProductsList from "./ProductsList";
import { addToCart } from "../cart/CartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetProductDetailsQuery(id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(data));
    // { id: data?.id, text: data?.title, image: data?.images[0] }
  };
  console.log(data);

  return (
    <>
      <NavBar />
      <div className="product-view">
        <img className="product-img" src={data?.images} alt={data?.title} />
        <div className="product-details">
          <h4>{data.title}</h4>
          <div className="rating">
            <img src={require("../../assets/landing_page/stars.svg")} alt="" />
            <h6>10 Reviews</h6>
          </div>
          <h3>${data.price}</h3>

          <h6>
            Availability:&nbsp;
            <span>{data?.availabilityStatus}</span>
          </h6>
          <div className="colors">
            <div className="blue"></div>
            <div className="green"></div>
            <div className="orange"></div>
            <div className="black"></div>
          </div>
          <button>
            <span>Select Options</span>
          </button>
          <img src={require("../../assets/product_details/like.svg")} alt="" />
          <button onClick={handleAddToCart}>
            <img
              src={require("../../assets/product_details/basket.svg")}
              alt=""
            />
          </button>

          <img src={require("../../assets/product_details/more.svg")} alt="" />
        </div>
      </div>
      <ProductsList />
      <Footer />
    </>
  );
};

export default ProductDetails;
