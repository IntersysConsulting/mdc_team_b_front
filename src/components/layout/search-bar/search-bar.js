import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import search from "./search.svg";
import FilterSortModal from "../../filter-sort-modal/filter-sort-modal.jsx";
import "./search-bar.css";

const SearchBar = props => {
  const [searchBarState, setSearchBarState] = useState({ show: false });

  const searchDownHandler = () => {
    alert("This will trigger a search");
  };

  /*
  const filterDownHandler = () => {
    alert("This will show filter/sort modal");
  };
  */

  const handleModalClose = () => {
    setSearchBarState({ show: false });
  };

  const handleModalAccept = () => {
    // Do something like access the API for a filter/sort
    setSearchBarState({ show: false });
  };

  const handleModalOpen = () => {
    setSearchBarState({ show: true });
  };

  return (
    <div>
      <InputGroup className="justify-content-center">
        <Form.Control className="bar" type="text" placeholder="Search" />
        <InputGroup.Append>
          <Button className="filter" onClick={handleModalOpen}>
            Filter
          </Button>
        </InputGroup.Append>
        <InputGroup.Append>
          <Button className="search" onClick={searchDownHandler}>
            <img src={search} alt="Search" className="searchIcon" />
          </Button>
        </InputGroup.Append>
      </InputGroup>
      <FilterSortModal
        filters={props.filters}
        handleCloseModal={handleModalClose}
        handleAcceptModal={handleModalAccept}
        show={searchBarState.show}
      ></FilterSortModal>
    </div>
  );
};

export default SearchBar;
