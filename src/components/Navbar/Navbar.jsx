import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import icon from "../../assets/eshop.png";
import "./NavBarStyling.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ totalItems }) => {
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className="appBar" color="inherit">
        <Toolbar>
          <Typography variant="h6" className="title" color="inherit">
            <img
              src={icon}
              alt="commerce.js"
              height="25px"
              className="image"
            ></img>
            <Link
              to="/"
              style={{
                textDecoration: "none",
              }}
            >
              Commerce.js
            </Link>

            <div className="grow"></div>
            <div className="button">
              {location.pathname == "/" && (
                <IconButton color="inherit">
                  <Badge badgeContent={totalItems} color="secondary">
                    <Link
                      to="cart"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <ShoppingCart />
                    </Link>
                  </Badge>
                </IconButton>
              )}
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
