import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import "./styles.css";
import img from "../../../assets/mac.jpg";
const Product = ({ product, onAddToCart }) => {
  console.log(product);
  return (
    <Card className="root">
      <CardMedia className="media" image={product.image.url} />
      <CardContent>
        <div className="cardContent">
          <Typography variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
        <CardActions disableSpacing className="CardActions">
          <IconButton onClick={() => onAddToCart(product.id,1)}>
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default Product;
