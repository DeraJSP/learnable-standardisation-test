import { useGetProductDetailsQuery } from "./productsApi";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetProductDetailsQuery(id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="product-view">
      <img className="product-img" src={data.images} alt={data.title} />
      <div className="product-details">
        <h4>{data.title}</h4>
        <div className="rating">
          <img src={require("../../assets/landing_page/stars.svg")} alt="" />
          <h6>10 Reviews</h6>
        </div>
        <h3>${data.price}</h3>

        <h6>
          Availability:&nbsp;
          <span>{data.availabilityStatus}</span>
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
        <img src={require("../../assets/landing_page/phone.svg")} alt="" />
        <img src={require("../../assets/landing_page/phone.svg")} alt="" />
        <img src={require("../../assets/landing_page/phone.svg")} alt="" />
      </div>
    </div>
  );
};

export default ProductDetails;
