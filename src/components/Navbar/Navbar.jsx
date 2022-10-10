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

const Navbar = ({totalItems}) => {
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
            Commerce.js
            <div className="grow"></div>
            <div className="button">
              <IconButton color="inherit">
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
