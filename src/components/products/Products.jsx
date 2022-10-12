import React from "react";
import { Grid } from "@mui/material";
import Product from "./Product/Product";
import mac from "../../assets/mac.jpg";
import "./styless.css";

const Products = ({ products, onAddToCart }) => {
  return (
    <main className="content">
      <div className="toolBar" />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
