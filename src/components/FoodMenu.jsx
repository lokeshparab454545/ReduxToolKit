import React from "react";
import MenuCard from "./MenuCard";
import { useSelector } from "react-redux";
export const FoodMenu = () => {
  const items = useSelector((state) => state.allCart.items);

  return (
    <div className="food-menu">
      <h1>Food Menu</h1>
      {items.map((menu, i) => (
        <MenuCard
          key={i}
          img={menu.img}
          name={menu.name}
          price={menu.price}
          menu={menu}
        />
      ))}
    </div>
  );
};
