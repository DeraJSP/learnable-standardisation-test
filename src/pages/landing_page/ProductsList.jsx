// components/ProductList.js
import React, { useState, useEffect } from "react";
import { useGetProductsQuery } from "./productsApi";
import { useDispatch, useSelector } from "react-redux";
import "./ProductsList.css";

const ProductsList = () => {
  const dispatch = useDispatch();
  const [skip, setSkip] = useState(0);
  const [products, setProducts] = useState([]);
  const { data, error, isLoading, isFetching } = useGetProductsQuery({
    limit: 10,
    skip,
  });

  useEffect(() => {
    if (data) {
      setProducts([...products]);
    }
  }, [data]);

  const handleLoadMore = () => {
    setSkip(skip + 10);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(isLoading ? "Loading result" : data);

  return (
    <div className="featured-products">
      <h4>Featured Products</h4>
      <h3>BESTSELLER PRODUCTS</h3>
      <p>Discover what's trending in the design world!</p>

      <div className="products-list">
        {data.products.map((product) => (
          <a href={`/product/${product.id}`}>
            <div key={product.id} className="product">
              <div className="product-info">
                <img src={product.images} alt={product.title} />

                <h5>{product.title}</h5>
                <p>{product.category}</p>
                <p className="price">${product.price} </p>
              </div>
            </div>
          </a>
        ))}
      </div>
      {isFetching ? (
        <div>Loading more...</div>
      ) : (
        <button className="load-more" onClick={handleLoadMore}>
          Load More Products
        </button>
      )}
    </div>
  );
};

export default ProductsList;
