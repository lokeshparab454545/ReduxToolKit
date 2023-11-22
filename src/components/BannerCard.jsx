import React from "react";

export const BannerCard = ({ color, title, desc }) => {
  return (
    <div className="banner" style={{ backgroundColor: color }}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};
