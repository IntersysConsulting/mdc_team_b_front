import React, { useState } from "react";
import { Modal, Form, Row, Col } from "react-bootstrap";
import "./filter-sort-modal.css";
import ChangeViewButton from "../change-view-button/change-view-button.jsx";
import RadioButton from "../radio-button/radio-button.jsx";
import CancelButton from "../cancel-button/cancel-button.jsx";
import Switch from "../2WordSwitch/Switch.jsx";

const FilterSortModal = props => {
  const [modalState, setModalState] = useState({
    sort: "oldest",
    filter: "none",
    selectedSort: true
  });

  const radioIds = ["a-z", "z-a", "cheapest", "priciest", "newest", "oldest"];

  const filterBody = () => {
    return <div></div>;
  };

  const setSortState = e => {
    setModalState({
      sort: e.target.id,
      filter: modalState.filter,
      selectedSort: modalState.selectedSort
    });
  };

  const setFilterState = e => {
    setModalState({
      sort: modalState.sort,
      filter: e.target.filter,
      selectedSort: modalState.selectedSort
    });
  };

  const flipSwitch = e => {
    console.log("Switch was hit. E= " + e);
    setModalState({
      sort: modalState.sort,
      filter: modalState.filter,
      selectedSort: !modalState.selectedSort
    });
  };

  const clearAll = () => {
    setModalState({});
  };

  const sortBody = () => {
    return (
      <Form>
        <Form.Row className="text-left">
          <Form.Group as={Col}>
            <RadioButton
              name="sort-radios"
              label="A-Z"
              id={radioIds[0]}
              onChange={setSortState}
              checked={modalState.sort == radioIds[0]}
            ></RadioButton>
            <RadioButton
              name="sort-radios"
              label="Lowest Price"
              id={radioIds[2]}
              onChange={setSortState}
              checked={modalState.sort == radioIds[2]}
            ></RadioButton>
            <RadioButton
              name="sort-radios"
              label="Newest"
              id={radioIds[4]}
              onChange={setSortState}
              checked={modalState.sort == radioIds[4]}
            ></RadioButton>
          </Form.Group>
          <Form.Group as={Col}>
            <RadioButton
              name="sort-radios"
              label="Z-A"
              id={radioIds[1]}
              onChange={setSortState}
              checked={modalState.sort == radioIds[1]}
            ></RadioButton>
            <RadioButton
              name="sort-radios"
              label="Highest Price"
              id={radioIds[3]}
              onChange={setSortState}
              checked={modalState.sort == radioIds[3]}
            ></RadioButton>
            <RadioButton
              name="sort-radios"
              label="Oldest"
              id={radioIds[5]}
              onChange={setSortState}
              checked={modalState.sort == radioIds[5]}
            ></RadioButton>
          </Form.Group>
        </Form.Row>
      </Form>
    );
  };

  return (
    <div>
      <Modal.Dialog className="filter-sort-modal">
        <Modal.Header>
          <Modal.Title>
            <Switch
              leftWord="Filter"
              rightWord="Sort"
              isOn={modalState.selectedSort}
              onClick={flipSwitch}
            ></Switch>
          </Modal.Title>
          <CancelButton className="filter-sort-clear-button">
            Clear
          </CancelButton>
        </Modal.Header>
        {/* Here a function based on what title is selected shows different options */}
        <Modal.Body className="filter-sort-modal-body-text">
          {sortBody()}
        </Modal.Body>
        <Modal.Footer>
          <ChangeViewButton className="col-12 filter-sort-modal-button">
            Apply
          </ChangeViewButton>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default FilterSortModal;
