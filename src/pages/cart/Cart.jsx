// import { useGetPostsQuery } from "../../app/productsApi";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, removeFromCart } from "./CartSlice";

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
    <main>
      <section>
        <h1>Shopping Cart</h1>
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
                    <img src={item.thumbnail} alt={item.title} />
                    <div>
                      <h3>{item?.text}</h3>
                      <p>{item.availabilityStatus}</p>
                      <p>
                        Rating: {item.rating} ({item.numReviews} reviews)
                      </p>
                      <button
                        onClick={() =>
                          dispatch(removeFromCart({ id: item.id }))
                        }
                      >
                        <i className="fas fa-trash"></i> Remove
                      </button>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <button
                      onClick={() => dispatch(decrement({ id: item.id }))}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => dispatch(increment({ id: item.id }))}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>
                  <p>${(item.price * item.quantity).toFixed(2)}</p>
                  <p>({item.price?.toFixed(2)} x 1 item)</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="cartSummary">
        <div className="orderSummaryDiv">
          <div className="orderSummary1">
            <h3>Order Summary</h3>
            <p>{totalQuantity} items</p>
          </div>
          <div className="deliveryCharges">
            <h5>Delivery Charges</h5>
            <p>Add your delivery address to checkout to see delivery charges</p>
          </div>
        </div>
        <div className="subTotalDiv">
          <div className="subTotal">
            <h5>SubTotal</h5>
            <p>${calculateTotalPrice()}</p>
          </div>
          <div className="subTotal">
            <h4>Total</h4>
            <p className="totalPrice">${calculateTotalPrice()}</p>
          </div>
          <div className="subTotalLastPDiv">
            <p>Excluding Delivery Charges</p>
          </div>
        </div>

        <div className="checkoutButton">
          <button>Proceed to Checkout</button>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Cart;
