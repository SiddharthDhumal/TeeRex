import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Box, Grid } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NoItemFound from "./NoItemFound";

export default function CartList({ product }) {
  const [cartId, setCartId] = useState([]);
  const [prevCartItem, setPrevCartItem] = useState(
    JSON.parse(localStorage.getItem("prevCartItem"))
  );
  const [cartItem, setCartItem] = useState(
    prevCartItem.length > 0 ? [...prevCartItem] : []
  );

  const prevId = JSON.parse(localStorage.getItem("prevId"));

  const Navigate = useNavigate();

  function handleAddtoCart(item) {
    if (!cartItem.includes(item) && !prevId.includes(item.id)) {
      setCartId([...cartId, item.id]);
      setCartItem([...cartItem, item]);
      localStorage.setItem("cartItem", JSON.stringify(cartItem));
    }
  }

  function handleNavigate(item) {
    setCartItem([...cartItem, item]);
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
    Navigate("/checkout");
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {product.length ? (
            product &&
            product.map((item) => (
              <Grid item xs={12} sm={6} md={3} className="cart" key={item.id}>
                <Card
                  sx={{ maxWidth: 345 }}
                  style={{
                    borderRadius: "9px",
                    margin: "1rem",
                    padding: "1rem",
                    boxShadow:
                      "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
                  }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="190"
                      image={item?.imageURL}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        style={{
                          fontWeight: "bolder",
                          fontSize: "1.4rem",
                        }}>
                        {item.name}
                      </Typography>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}>
                        <Typography style={{ fontSize: "1.5rem" }}>
                          ${item?.price}
                        </Typography>
                        {item.quantity > 0 ? (
                          prevId.includes(item.id) ||
                          cartId.includes(item.id) ? (
                            <Button
                              className="checkout-btn"
                              onClick={() => handleNavigate(item)}>
                              Checkout
                            </Button>
                          ) : (
                            <Button
                              className="checkout-btn"
                              variant="contained"
                              onClick={() => handleAddtoCart(item)}>
                              Add to Cart
                            </Button>
                          )
                        ) : (
                          <Button
                            className="checkout-btn"
                            color="error"
                            disabled={true}>
                            Out of Stock
                          </Button>
                        )}
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))
          ) : (
            <NoItemFound />
          )}
        </Grid>
      </Box>
    </>
  );
}
