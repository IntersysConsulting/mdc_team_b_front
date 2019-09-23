import React, { useState } from "react";
import FilterSortModal from "./filter-sort-modal.jsx";
import { Button } from "react-bootstrap";

const FilterModalDemo = props => {
  // This was also integrated in search-bar.js
  const [demoState, setDemoState] = useState({ show: false });

  const filterOptions = ["Bears", "Dogs", "Horses", "Donkeys"];

  const handleClose = () => {
    setDemoState({ show: false });
  };

  const handleAccept = () => {
    // Do something like access the API for a filter/sort
    setDemoState({ show: false });
  };

  const handleOpen = () => {
    setDemoState({ show: true });
  };

  return (
    <div className="justify-content-center">
      <h1>Filter Modal</h1>
      <Button variant="warning" onClick={handleOpen}>
        Filter
      </Button>
      <FilterSortModal
        filters={filterOptions}
        handleCloseModal={handleClose}
        handleAcceptModal={handleAccept}
        show={demoState.show}
      ></FilterSortModal>
    </div>
  );
};

export default FilterModalDemo;
