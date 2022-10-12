import React from "react";
import './cartStyle.css'
import { Container, Typography, Button, Grid } from "@mui/material";
const Cart = ({ cart }) => {
  const isEmpty = !cart.line_items;

  const EmptyCart = () => {
    <Typography variant="subtitle1">
      You have no items in your shopping cart!
    </Typography>;
  };

  const FilledCart = () => {
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <div>{item.name}</div>
          </Grid>
        ))}
      </Grid>
      <div className="cardDetails">
        <Typography variant="h4">
          Subtotal : {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className="emptyButton"
            size="large"
            type="button"
            variant="contained"
            color="secondary"
          >
            Empty cart
          </Button>
          <Button
            className="checkout"
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>;
  };

  return (
    <Container>
      <div className="toolbar" />
      <Typography className="title" variant="h3">
        Your Shopping cart
      </Typography>
      {isEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
