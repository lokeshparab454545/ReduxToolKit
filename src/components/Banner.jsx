import React from "react";
import { BannerCard } from "./BannerCard";

export const Banner = () => {
  return (
    <div className="banners">
      <BannerCard
        color={"#fedeb5"}
        title={"New Arrivals"}
        desc={"New Product, New Quality, New speed, New Price"}
      />
      <BannerCard
        color={"#ecf4fa"}
        title={"Free Delivery"}
        desc={"Get your order derlivered in 30 minutes"}
      />
      <BannerCard
        color={"#fffaf5"}
        title={"Beverage Category"}
        desc={"Combos, Single Coke not delivered"}
      />
    </div>
  );
};
