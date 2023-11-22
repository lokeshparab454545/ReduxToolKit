import React from "react";
import { CiSearch } from "react-icons/ci";
import { FiGrid, FiShoppingBag } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="/logo.png" alt="" />
        <h4>Pizza Heist</h4>
      </div>
      <div className="searchbar">
        <CiSearch />
        <input type="text" placeholder="Search for Products" />
      </div>
      <div className="header-menu">
        <div className="menu">
          <FiGrid />
          <p>Categories</p>
        </div>
        <div className="menu">
          <FiShoppingBag />
          <p>Cart</p>
        </div>
        <div className="menu">
          <CgProfile />
          <p>Categories</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
