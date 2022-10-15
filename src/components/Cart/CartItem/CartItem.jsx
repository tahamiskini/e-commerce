import React from "react";
import "./CartItemStyle.css";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";

const CartItem = ({ item }) => {
  return (
    <Card>
      <CardMedia image={item.image.url} className="media" />
      <CardContent className="cartContent">
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h4">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className="cartActions">
        <div className="buttons">
          <Button type="button" size="small">
            -
          </Button>
          <Typography>&nbsp;{item.quantity}&nbsp;</Typography>

          <Button type="button" size="small">
            +
          </Button>
        </div>
        <Button variant="contained" type="button" color="secondary">
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
