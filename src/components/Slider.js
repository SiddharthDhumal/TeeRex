import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function SwipeableTemporaryDrawer({
  handleFilterByColor,
  handleFilterByGender,
  handleFilterByType,
  handleFilterByPriceRange,
}) {
  const [state, setState] = React.useState({
    right: false,
  });
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const prices = [
    {
      id: 1,
      label: "0-250",
      lowerLimit: 0,
      upperLimit: 250,
    },
    {
      id: 2,
      label: "251-450",
      lowerLimit: 251,
      upperLimit: 450,
    },
    {
      id: 3,
      label: "450 and above",
      lowerLimit: 451,
      upperLimit: 1000,
    },
  ];

  const list = (anchor) => (
    <>
      <Box
        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
        role="presentation"
        open={open}
        style={{ backgroundColor: "#faf8f2" }}>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 1rem",
          }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ margin: "1rem" }}>
            Add Filter
          </Typography>
          <CloseOutlinedIcon
            style={{ cursor: "pointer" }}
            onClick={toggleDrawer(anchor, false)}
          />
        </Box>
        <Divider />
        <List>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ margin: "1rem" }}>
            Color
          </Typography>
          {["red", "blue", "green"].map((text, index) => (
            <FormGroup style={{ margin: "0.5rem 2rem" }} key={index}>
              <FormControlLabel
                control={
                  <Checkbox
                    value={text}
                    onChange={(e) => {
                      handleFilterByColor(e);
                    }}
                  />
                }
                label={text}
              />
            </FormGroup>
          ))}
        </List>
        <hr className="slider-hr" />
        <List>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ margin: "1rem" }}>
            Gender
          </Typography>
          {["men", "women"].map((text, index) => (
            <FormGroup style={{ margin: "0.5rem 2rem" }} key={index}>
              <FormControlLabel
                control={
                  <Checkbox
                    value={text}
                    onChange={(e) => {
                      handleFilterByGender(e);
                    }}
                  />
                }
                label={text}
              />
            </FormGroup>
          ))}
        </List>
        <hr className="slider-hr" />
        <List>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ margin: "1rem" }}>
            Price
          </Typography>
          {prices.map((price, index) => (
            <FormGroup style={{ margin: "0.5rem 2rem" }} key={index}>
              <FormControlLabel
                control={
                  <Checkbox
                    value={JSON.stringify(price)}
                    onChange={(e) => {
                      handleFilterByPriceRange(e);
                    }}
                  />
                }
                label={price.label}
              />
            </FormGroup>
          ))}
        </List>
        <hr className="slider-hr" />
        <List>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ margin: "1rem" }}>
            Type
          </Typography>
          {["polo", "hoodie", "basic"].map((text, index) => (
            <FormGroup style={{ margin: "0.5rem 2rem" }} key={index}>
              <FormControlLabel
                control={
                  <Checkbox
                    value={text}
                    onChange={(e) => {
                      handleFilterByType(e);
                    }}
                  />
                }
                label={text}
              />
            </FormGroup>
          ))}
        </List>
      </Box>
    </>
  );

  return (
    <>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}>
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </>
  );
}
