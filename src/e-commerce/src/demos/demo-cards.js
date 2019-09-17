import React, {useState} from 'react';
import PersonalDetailsCardDemo from '../components/personal-details-card/demo.jsx';
import AddressManagementCardDemo from '../components/address-management-card/demo.jsx';
import LastOrderCardDemo from '../components/last-order-card/demo.jsx';
import CardProduct from '../components/product/card.jsx';

const DemoCards = () => {
  return (
    <div className="container">
      <PersonalDetailsCardDemo></PersonalDetailsCardDemo>
      <AddressManagementCardDemo></AddressManagementCardDemo>
      <LastOrderCardDemo></LastOrderCardDemo>
      <CardProduct></CardProduct>
    </div>
  );
};

export default DemoCards;
