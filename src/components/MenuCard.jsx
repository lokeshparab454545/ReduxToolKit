import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/CartSlice";

const MenuCard = ({ img, name, price, menu }) => {
  const dispatch = useDispatch();
  return (
    <div className="menu-card">
      <img src={img} alt="" />
      <div className="card-desc">
        <div className="card-name">
          <h3>{name}</h3>
          <p>{price}</p>
        </div>
        <div className="card-btn">
          <button onClick={() => dispatch(addToCart(menu))}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
