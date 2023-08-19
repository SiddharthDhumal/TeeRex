import { TextField, Box, Button } from "@mui/material";
import SwipeableTemporaryDrawer from "./Slider";

// import SearchIcon from "@mui/icons-material/Search";

export default function Searchbar({
  filterParam,
  setFilterParam,
  handleFilterByColor,
  handleFilterByGender,
  handleFilterByType,
  handleFilterByPriceRange,
}) {
  return (
    <Box
      style={{
        margin: "2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
      <TextField
        id="standard-basic"
        placeholder="Search for products"
        variant="standard"
        value={filterParam?.searchInput}
        onChange={(e) => {
          setFilterParam({ ...filterParam, searchInput: e.target?.value });
        }}
        style={{ width: "95%" }}
      />
      <Button>
        <SwipeableTemporaryDrawer
          handleFilterByColor={handleFilterByColor}
          handleFilterByGender={handleFilterByGender}
          handleFilterByType={handleFilterByType}
          handleFilterByPriceRange={handleFilterByPriceRange}
        />
      </Button>
    </Box>
  );
}
