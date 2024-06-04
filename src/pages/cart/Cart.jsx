// import { useGetPostsQuery } from "../../app/productsApi";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, removeFromCart } from "./CartSlice";
import NavBar from "../landing_page/NavBar";
import Footer from "../landing_page/Footer";
import ProductsList from "../landing_page/ProductsList";

import "./cart.css";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const calculateTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };
  console.log(cartItems);

  return (
    <>
      <NavBar />
      <main>
        <section>
          <div className="crumbs">
            <span className="home">Home</span>&nbsp;&nbsp;
            <span className="arrow">></span>&nbsp; &nbsp;
            <span className="shop">shop</span>&nbsp; &nbsp;
            <span className="arrow">></span>&nbsp; &nbsp;
            <span className="cart">shopping cart</span>
          </div>
          <div className="cartsummary">
            <p>Shopping Cart</p>
            <table>
              <thead>
                <tr>
                  <th>Item Detail</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div>
                        <div className="itemdetailswrap">
                          <img
                            className="cartthumb"
                            src={item.thumbnail}
                            alt={item.title}
                          />
                          <div className="itemdetails">
                            <h3>{item.title}</h3>
                            <p className="available">
                              {item.availabilityStatus}
                            </p>
                            <div className="rating">
                              <p>
                                Rating: {item.rating} ({item.numReviews}{" "}
                                reviews)
                              </p>
                              <img
                                src={require("../../assets/landing_page/stars.svg")}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <button
                          className="remove"
                          onClick={() =>
                            dispatch(removeFromCart({ id: item.id }))
                          }
                        >
                          <i className="fas fa-trash"></i> Remove
                        </button>
                      </div>
                    </td>
                    <td>
                      <div>
                        <button
                          className="minus"
                          onClick={() => dispatch(decrement({ id: item.id }))}
                        >
                          -
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button
                          className="plus"
                          onClick={() => dispatch(increment({ id: item.id }))}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>
                      <p className="itemtotal">
                        N{(item.price * item.quantity).toFixed(2)}
                      </p>
                      <p className="itemprice">
                        N({item.price?.toFixed(2)} x 1 item)
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="orders">
          <div className="ordersummary">
            <div className="totalquantity">
              <p>Order Summary</p>
              <p>{totalQuantity} items</p>
            </div>
            <div className="deliverycharges">
              <p>Delivery Charges</p>
              <p>
                Add your delivery address to checkout to see delivery charges
              </p>
            </div>
          </div>
          <div className="subtotal">
            <div className="sub">
              <p>SubTotal</p>
              <p>N{calculateTotalPrice()}</p>
            </div>
            <div className="total">
              <h4>Total</h4>
              <p>N{calculateTotalPrice()}</p>
            </div>
          </div>
          <div className="exclude">
            <p>Excluding Delivery Charges</p>
          </div>

          <div className="checkoutbtn">
            <button>
              <span>Proceed to Checkout</span>
            </button>
            <div className="payment">
              <img src={require("../../assets/cart/paystack.svg")} alt="" />
              <img src={require("../../assets/cart/mastercard.svg")} alt="" />
              <img src={require("../../assets/cart/visa.svg")} alt="" />
            </div>
          </div>
        </section>
      </main>
      <ProductsList />
      <Footer />
    </>
  );
}

export default Cart;
