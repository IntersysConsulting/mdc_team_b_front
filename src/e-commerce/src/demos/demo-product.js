import React from 'react';
import DemoStorefrontImage from '../components/storefront-image/demo';
import ProductManagmentDemo from '../components/product-managment/demo';
import ProductDemo from '../components/product-card/demo';

const DemoProduct = () => {
  return (
    <div className="container">
      <ProductManagmentDemo></ProductManagmentDemo>
      <ProductDemo></ProductDemo>
    </div>
  );
};

export default DemoProduct;
