import React, { useState, useEffect } from "react";
import { Modal, Form, Row, Col, Spinner } from "react-bootstrap";
import "./filter-sort-modal.css";
import ChangeViewButton from "../change-view-button/change-view-button.jsx";
import RadioButton from "../radio-button/radio-button.jsx";
import CancelButton from "../cancel-button/cancel-button.jsx";
import Checkbox from "../checkbox/Checkbox.jsx";
import Switch from "../2WordSwitch/Switch.jsx";

const FilterSortModal = props => {
  const radioIds = ["a-z", "z-a", "cheapest", "priciest", "newest", "oldest"];
  var Checkboxes = [];
  const [modalState, setModalState] = useState({
    sort: radioIds[5],
    filter: undefined,
    isSortMenuSelected: false,
    isLoading: true,
    minPrice: 0,
    maxPrice: -1,
    show: false
  });

  useEffect(() => {
    var filterList = [];
    props.filters.forEach((value, index, array) => {
      filterList.push({ id: "checkbox-" + value, checked: true });
    });
    setModalState({
      sort: modalState.sort,
      filter: filterList,
      isSortMenuSelected: modalState.isSortMenuSelected,
      isLoading: false,
      minPrice: modalState.minPrice,
      maxPrice: modalState.maxPrice,
      show: props.show
    });
  }, []);

  //#region Variants of SetState

  const setSortState = e => {
    setModalState({
      sort: e.target.id,
      filter: modalState.filter,
      isSortMenuSelected: modalState.isSortMenuSelected,
      isLoading: modalState.isLoading,
      minPrice: modalState.minPrice,
      maxPrice: modalState.maxPrice,
      show: props.show
    });
  };

  const setFilterState = e => {
    setModalState({
      sort: modalState.sort,
      filter: e,
      isSortMenuSelected: modalState.isSortMenuSelected,
      isLoading: modalState.isLoading,
      minPrice: modalState.minPrice,
      maxPrice: modalState.maxPrice,
      show: props.show
    });
  };

  const flipSwitch = e => {
    console.log("Switch button was clicked");
    setModalState({
      sort: modalState.sort,
      filter: modalState.filter,
      isSortMenuSelected: !modalState.isSortMenuSelected,
      isLoading: modalState.isLoading,
      minPrice: modalState.minPrice,
      maxPrice: modalState.maxPrice,
      show: props.show
    });
  };

  const setMinimumPrice = e => {
    setModalState({
      sort: modalState.sort,
      filter: modalState.filter,
      isSortMenuSelected: modalState.isSortMenuSelected,
      isLoading: modalState.isLoading,
      minPrice: e.target.value,
      maxPrice: modalState.maxPrice,
      show: props.show
    });
  };

  const setMaximumPrice = e => {
    setModalState({
      sort: modalState.sort,
      filter: modalState.filter,
      isSortMenuSelected: modalState.isSortMenuSelected,
      isLoading: modalState.isLoading,
      minPrice: modalState.minPrice,
      maxPrice: e.target.value,
      show: props.show
    });
  };

  const clearAll = () => {
    var cleanFilter = modalState.filter;
    cleanFilter.forEach((value, index, array) => {
      value.checked = props.show;
    });

    setModalState({
      sort: radioIds[5],
      filter: cleanFilter,
      isSortMenuSelected: modalState.isSortMenuSelected,
      isLoading: modalState.isLoading,
      minPrice: 0,
      maxPrice: -1,
      show: props.show
    });
  };

  //#endregion

  //#region Checkboxes
  const makeCheckboxes = () => {
    props.filters.forEach((value, index, array) => {
      Checkboxes.push(
        <Checkbox
          text={value}
          id={modalState.filter[index].id}
          checked={modalState.filter[index].checked}
          onClick={handleCheckboxMark}
        />
      );
    });
  };
  const handleCheckboxMark = e => {
    console.log(e.target);
    const target = e.target.id;
    var filter = modalState.filter;
    filter.forEach((value, index, array) => {
      if (value.id === target) {
        console.log(value.id + " " + index + " " + value.checked);
        value.checked = !value.checked;
      }
    });
    setFilterState(filter);
  };
  //#endregion Checkboxes

  //#region Bodies of the modal
  const sortBody = () => {
    // The body when Sort is selected
    return (
      <Form>
        <Form.Row className="text-left">
          <Form.Group as={Col}>
            <RadioButton
              name="sort-radios"
              label="A-Z"
              id={radioIds[0]}
              onChange={setSortState}
              checked={modalState.sort === radioIds[0]}
            ></RadioButton>
            <RadioButton
              name="sort-radios"
              label="Lowest Price"
              id={radioIds[2]}
              onChange={setSortState}
              checked={modalState.sort === radioIds[2]}
            ></RadioButton>
            <RadioButton
              name="sort-radios"
              label="Newest"
              id={radioIds[4]}
              onChange={setSortState}
              checked={modalState.sort === radioIds[4]}
            ></RadioButton>
          </Form.Group>
          <Form.Group as={Col}>
            <RadioButton
              name="sort-radios"
              label="Z-A"
              id={radioIds[1]}
              onChange={setSortState}
              checked={modalState.sort === radioIds[1]}
            ></RadioButton>
            <RadioButton
              name="sort-radios"
              label="Highest Price"
              id={radioIds[3]}
              onChange={setSortState}
              checked={modalState.sort === radioIds[3]}
            ></RadioButton>
            <RadioButton
              name="sort-radios"
              label="Oldest"
              id={radioIds[5]}
              onChange={setSortState}
              checked={modalState.sort === radioIds[5]}
            ></RadioButton>
          </Form.Group>
        </Form.Row>
      </Form>
    );
  };

  const filterBody = () => {
    return (
      <Form>
        {modalState.isLoading ? (
          <Spinner animation="border" variant="warning" />
        ) : (
          makeCheckboxes()
        )}
        <Form.Row className="text-left pl-1">
          <Form.Group as={Col} className="filter-body">
            {Checkboxes}
          </Form.Group>
        </Form.Row>
        <h1>Price</h1>
        <Row>
          <Col>
            <Form.Control
              type="text"
              placeholder="Min"
              value={modalState.minPrice === 0 ? "" : modalState.minPrice} // Checks if the value is the default, then ignores for display
              onChange={setMinimumPrice}
            ></Form.Control>
          </Col>
          <Col>
            <Form.Control
              type="text"
              placeholder="Max"
              value={
                modalState.maxPrice === -1 // Checks if the value is the default, then ignores for display
                  ? ""
                  : modalState.maxPrice
              }
              onChange={setMaximumPrice}
            ></Form.Control>
          </Col>
        </Row>
      </Form>
    );
  };
  //#endregion

  return (
    <div className="row">
      <Modal
        dialogClassName="filter-sort-modal "
        show={props.show}
        onHide={props.handleCloseModal}
        centered
      >
        <Modal.Header>
          <Modal.Title>
            <Switch
              leftWord="Filter"
              rightWord="Sort"
              isOn={modalState.isSortMenuSelected}
              onClick={flipSwitch}
            ></Switch>
          </Modal.Title>
          <CancelButton className="filter-sort-clear-button" onClick={clearAll}>
            Clear
          </CancelButton>
        </Modal.Header>
        <Modal.Body className="filter-sort-modal-body-text">
          {modalState.isSortMenuSelected ? sortBody() : filterBody()}
        </Modal.Body>
        <Modal.Footer>
          <ChangeViewButton
            className="col-12 filter-sort-modal-button"
            onClick={props.handleAcceptModal}
          >
            Apply
          </ChangeViewButton>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FilterSortModal;
