import "./Products.css";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import CartList from "./CartList";
import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "./Loading";

export default function Products() {
  const [arr, setArr] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState([]);
  const [filterParam, setFilterParam] = useState({
    colors: [],
    gender: [],
    type: [],
    priceRange: [],
    searchInput: "",
  });

  useEffect(function () {
    async function getData() {
      try {
        let res = await axios.get(
          "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
        );
        setIsLoading(false);
        setArr(res.data);
        setFilter(res.data);
      } catch (error) {
        throw new Error("Failed to get Data");
      }
    }
    getData();
  }, []);

  function handleFilterByColor(e) {
    let filterbyColor = [...filterParam.colors];
    if (e.target.checked)
      filterbyColor = [...filterParam.colors, e.target.value];
    else filterbyColor.splice(filterParam.colors.indexOf(e.target.value), 1);
    setFilterParam({ ...filterParam, colors: filterbyColor });
  }

  function handleFilterByGender(e) {
    let filterbyGender = [...filterParam.gender];
    if (e.target.checked)
      filterbyGender = [...filterParam.gender, e.target.value];
    else filterbyGender.splice(filterParam.gender.indexOf(e.target.value), 1);
    setFilterParam({ ...filterParam, gender: filterbyGender });
  }

  function handleFilterByType(e) {
    let filterByType = [...filterParam.type];
    if (e.target.checked) filterByType = [...filterParam.type, e.target.value];
    else filterByType.splice(filterParam.type.indexOf(e.target.value), 1);
    setFilterParam({ ...filterParam, type: filterByType });
  }

  function handleFilterByPriceRange(e) {
    let filterbyPriceRange = [...filterParam.priceRange];
    if (e.target.checked)
      filterbyPriceRange = [...filterParam.priceRange, e.target.value];
    else
      filterbyPriceRange.splice(
        filterParam.priceRange.indexOf(e.target.value),
        1
      );
    setFilterParam({
      ...filterParam,
      priceRange: filterbyPriceRange,
    });
  }

  function SearchProducts() {
    let newProducts = arr;
    const search = filterParam.searchInput.toLowerCase();
    const searchFilters = ["color", "gender", "type", "price"];
    if (filterParam.searchInput) {
      newProducts = newProducts.filter((item) =>
        searchFilters.some((idx) => {
          const products = item[idx];
          if (typeof products === "string") {
            return item.name.toLowerCase().includes(search);
          } else if (typeof products === "number") {
            return item.price.toString().toLowerCase().includes(search);
          }
          return false;
        })
      );
    }

    if (filterParam.colors.length) {
      newProducts = newProducts.filter((item) =>
        filterParam.colors.includes(item.color.toLowerCase())
      );
    }
    if (filterParam.gender?.length) {
      newProducts = newProducts.filter((item) =>
        filterParam.gender.includes(item.gender.toLowerCase())
      );
    }

    if (filterParam.type?.length) {
      newProducts = newProducts.filter((item) =>
        filterParam.type.includes(item.type.toLowerCase())
      );
    }

    if (filterParam.priceRange?.length) {
      newProducts = newProducts.filter((item) => {
        const price = item.price;
        return filterParam.priceRange.some((range) => {
          const { lowerLimit, upperLimit } = JSON.parse(range);
          return price >= lowerLimit && price <= upperLimit;
        });
      });
    }

    setFilter(newProducts);
  }

  useEffect(
    function () {
      SearchProducts();
    }
    // [filterParam]
  );

  return (
    <div className="container">
      <Navbar />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Searchbar
            filterParam={filterParam}
            setFilterParam={setFilterParam}
            handleFilterByColor={handleFilterByColor}
            handleFilterByGender={handleFilterByGender}
            handleFilterByType={handleFilterByType}
            handleFilterByPriceRange={handleFilterByPriceRange}
          />
          <CartList SearchProducts={SearchProducts} product={filter} />
        </>
      )}
    </div>
  );
}
