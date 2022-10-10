import React, { useState, useEffect } from "react";
import Products from "./components/products/Products";
import Navbar from "./components/Navbar/Navbar";
import { commerce } from "./lib/commerce";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState({});

  async function fetchProducts() {
    const { data } = await commerce.products.list();
    setProducts(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart()
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  console.log(cart);
  return (
    <div className="App">
      <Navbar totalItems={cart.total_items} />
      {!loading && <Products products={products} onAddToCart={handleAddToCart} />}
    </div>
  );
}

export default App;
