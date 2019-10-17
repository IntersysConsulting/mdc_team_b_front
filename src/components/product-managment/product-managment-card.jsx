import React, { useState } from "react";
import Price from "../price-text/price-text";
import EditButton from "../edit-button/edit-button";
import StorefrontImage from "../storefront-image/storefront-image";
import "./product-managment-card.css";
import DeleteButton from "../delete-button/delete-button";
import { useDispatch } from "react-redux";
import { deleteProductAction } from "../../actions/product-management/getProductActions";
import Spinner from "react-bootstrap/Spinner";

const CardProductManagment = props => {
  const [loading, setLoading] = useState({ loading: false });

  const dispatch = useDispatch();

  const load_delete = () => {
    dispatch(deleteProductAction(props.id));
  };

  return (
    <div className="pruduct-managment-container">
      <DeleteButton
        className="btn-delete-product icon-22x22 btn-red"
        onClick={() => {
          setLoading({ loading: true });
          setTimeout(load_delete, 100);
        }}
      />
      <div className="image-container">
        {loading.loading ? (
          <Spinner className="Spinner" animation="border" variant="warning" />
        ) : (
          <StorefrontImage url={props.url}></StorefrontImage>
        )}
      </div>

      <div className="body-card-container">
        <div className="text-card-container">
          <p className="text-indigo product-name">{props.name}</p>
          <div className="name-price-card-container">
            <p className="product-price">Price:</p>
            <Price price={props.price} />
          </div>
          <EditButton className="card-edit-button-product" icon>
            Edit
          </EditButton>
        </div>
      </div>
    </div>
  );
};

export default CardProductManagment;
