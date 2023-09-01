import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import {useSelector} from 'react-redux';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products.length);
  console.log(products)

  const showCart = () => {
    setOpen(!open);
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link to="/products/men">Men</Link>
          </div>
          <div className="item">
            <Link to="/products/women">Women</Link>
          </div>
        </div>
        <div className="center">
          <Link to="/">RETHREADS</Link>
        </div>
        <div className="right">
          <div className="cart-icon" onClick={showCart}>
            <ShoppingCartOutlinedIcon />
            <span>{products}</span>
          </div>
        </div>
        <div className="cartWrapper"> {open && <Cart />} </div>
    </div>
      </div>
      
  );
};

export default Navbar;
