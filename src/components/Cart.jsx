import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decreaseItemQuantity,
  getCartTotal,
  increaseItemQuantity,
  removeItem,
} from "../features/CartSlice";
export const Cart = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <div className="cart">
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <div className="cart-empty">
          <img src="/cart.png" alt="" />
          <h4>Cart is Empty</h4>
          <p>Looks like you haven't made your choice yet</p>
        </div>
      ) : (
        <div className="cart-container">
          <div className="cart-products">
            {cart?.map((data, i) => (
              <div key={i} className="cart-data">
                <img src={data.img} alt="" />
                <div className="cart-desc">
                  <p>{data.name}</p>
                  <p>{data.price}</p>
                </div>
                <button
                  className="delete-item"
                  onClick={() => dispatch(removeItem(data.id))}
                >
                  Delete
                </button>
                <div className="quantity">
                  <button
                    className="quantity-item"
                    onClick={() => dispatch(increaseItemQuantity(data.id))}
                  >
                    +
                  </button>
                  <p>{data.quantity}</p>
                  <button
                    className="quantity-item"
                    onClick={() => dispatch(decreaseItemQuantity(data.id))}
                  >
                    -
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div className="total">
              <h4>Total Quantity:</h4>
              <p>{totalQuantity}</p>
            </div>
            <div className="total">
              <h4>Total Price: </h4>
              <p>{totalPrice}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
