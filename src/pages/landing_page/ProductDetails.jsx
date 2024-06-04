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
        <div className="crumbs">
          <span className="home">Home</span>&nbsp;&nbsp;
          <span className="arrow">></span>&nbsp; &nbsp;
          <span className="shop">shop</span>
        </div>
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
          <div className="select">
            <button className="options">
              <span>Select Options</span>
            </button>
            <img
              src={require("../../assets/product_details/like.svg")}
              alt=""
            />
            <img
              onClick={handleAddToCart}
              src={require("../../assets/product_details/basket.svg")}
              alt=""
            />

            <img
              src={require("../../assets/product_details/more.svg")}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="longpara">
        <div className="para">
          <p>
            <h2>the quick fox jumps over</h2> Met minim Mollie non desert Alamo
            est sit cliquey dolor do met sent. RELIT official consequent door
            ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met. Met minim Mollie non desert Alamo est
            sit cliquey dolor do met sent. RELIT official consequent door ENIM
            RELIT Mollie. Excitation venial consequent sent nostrum met.
          </p>
        </div>
        <img src={require("../../assets/product_details/ikea.svg")} alt="" />
      </div>

      <ProductsList />
      <div className="sponsors">
        <img src={require("../../assets/product_details/hooli.svg")} alt="" />
        <img src={require("../../assets/product_details/lya.svg")} alt="" />
        <img
          src={require("../../assets/product_details/piedpiper.svg")}
          alt=""
        />
        <img src={require("../../assets/product_details/stripe.svg")} alt="" />
        <img src={require("../../assets/product_details/aws.svg")} alt="" />
        <img src={require("../../assets/product_details/reddit.svg")} alt="" />
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
