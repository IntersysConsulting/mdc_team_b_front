import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import queryString from "querystring";
import axios from "axios";
import "./storefront.css";
import Spinner from "react-bootstrap/Spinner";
import CardProduct from "../../components/product-card/product-card";
import Banner from "../../components/banner/banner";
import { requestGuest } from "../../api/authenticationApi";

const Storefront = props => {
  //State
  const [productsRetrieved, setProductsRetrieved] = useState({
    products: [],
    existingTotal: 0
  });
  const [currentPage, setCurrentPage] = useState({
    page: 0,
    loading: true
  });
  const [pageSize] = useState({ page_size: 15 });
  const [isLoading, setIsLoading] = useState({ loading: true });
  const dispatch = useDispatch();

  //Effects
  useEffect(() => {
    let url = props.location.search.substr(1);
    let searchParameters = queryString.parse(url);
    setIsLoading({
      loading: true
    });

    if (!localStorage.getItem("access_token")) {
      dispatch(requestGuest());
    }

    axios
      .get("http://localhost:5000/api/v1/products/", {
        params: {
          page: currentPage.page,
          page_size: pageSize.page_size,
          search_name: searchParameters["search"]
        }
      })
      .then(response => {
        setIsLoading({
          loading: false
        });
        setProductsRetrieved({
          products: response.data.data,
          existingTotal: response.data.total
        });
      });
  }, [currentPage, pageSize, props.location.search, dispatch]);

  //Methods

  let products = productsRetrieved.products.map(product => {
    return (
      <CardProduct
        className="ProductSpace"
        key={product._id}
        name={product.name}
        price={product.price}
        url={product.img}
        product_id={product._id}
        productPage={"/product/" + product._id}
      />
    );
  });

  let pages = [];
  for (
    let i = 0;
    i < productsRetrieved.existingTotal / pageSize.page_size;
    i++
  ) {
    pages.push(
      <div
        key={i}
        className="SinglePage"
        onClick={() => {
          setCurrentPage({ page: i });
        }}
      >
        {i + 1}
      </div>
    );
  }

  let component = null;
  isLoading.loading
    ? (component = (
        <div>
          <Banner />
          <div className="ProductsDisplay">
            <Spinner className="Spinner" animation="border" variant="warning" />
          </div>
        </div>
      ))
    : (component = (
        <div>
          <Banner />
          <section className="ProductsDisplay">{products}</section>
          <section className="PagesDisplay">{pages}</section>
        </div>
      ));

  //Results
  return <div>{component}</div>;
};

export default Storefront;
