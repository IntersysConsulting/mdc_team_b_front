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

  const [sort, setSort] = useState({ value: radioIds[5] });
  const [filter, setFilter] = useState({ value: undefined });
  const [menuSelected, setMenuSelected] = useState({ sortMenu: true });
  const [isLoading, setIsLoading] = useState({ loading: true });
  const [minPrice, setMinPrice] = useState({ value: 0 });
  const [maxPrice, setMaxPrice] = useState({ value: -1 });
  // const [show, setShow] = useState({ value: false });

  useEffect(() => {
    var filterList = [];
    if (isLoading.loading) {
      props.filters.forEach((value, index, array) => {
        filterList.push({ id: "checkbox-" + value, checked: true });
      });
      setFilter({ value: filterList });
      setIsLoading({ value: false });
    }
  }, [isLoading, props.filters]);

  //#region Variants of SetState

  const setSortState = e => {
    setSort({ value: e.target.id });
  };

  const setFilterState = e => {
    setFilter({ value: e });
  };

  const flipSwitch = e => {
    setMenuSelected({ sortMenu: !menuSelected.sortMenu });
  };

  const setMinimumPrice = e => {
    setMinPrice({ value: e.target.value });
  };

  const setMaximumPrice = e => {
    setMaxPrice({ value: e.target.value });
  };

  const clearAll = () => {
    var cleanFilter = filter.value;
    cleanFilter.forEach((value, index, array) => {
      value.checked = props.show;
    });
    setSort({ value: radioIds[5] });
    setFilter({ value: cleanFilter });
    setMinPrice({ value: 0 });
    setMaxPrice({ value: -1 });
  };

  //#endregion

  //#region Checkboxes
  const makeCheckboxes = () => {
    props.filters.forEach((value, index, array) => {
      Checkboxes.push(
        <Checkbox
          text={value}
          id={filter.value[index].id}
          key={filter.value[index].id}
          checked={filter.value[index].checked}
          onClick={handleCheckboxMark}
        />
      );
    });
  };
  const handleCheckboxMark = e => {
    const target = e.target.id;
    var _filter = filter.value;
    _filter.forEach((value, index, array) => {
      if (value.id === target) {
        console.log(value.id + " " + index + " is now " + !value.checked);
        value.checked = !value.checked;
      }
    });
    setFilterState(_filter);
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
              checked={sort.value === radioIds[0]}
            ></RadioButton>
            <RadioButton
              name="sort-radios"
              label="Lowest Price"
              id={radioIds[2]}
              onChange={setSortState}
              checked={sort.value === radioIds[2]}
            ></RadioButton>
            <RadioButton
              name="sort-radios"
              label="Newest"
              id={radioIds[4]}
              onChange={setSortState}
              checked={sort.value === radioIds[4]}
            ></RadioButton>
          </Form.Group>
          <Form.Group as={Col}>
            <RadioButton
              name="sort-radios"
              label="Z-A"
              id={radioIds[1]}
              onChange={setSortState}
              checked={sort.value === radioIds[1]}
            ></RadioButton>
            <RadioButton
              name="sort-radios"
              label="Highest Price"
              id={radioIds[3]}
              onChange={setSortState}
              checked={sort.value === radioIds[3]}
            ></RadioButton>
            <RadioButton
              name="sort-radios"
              label="Oldest"
              id={radioIds[5]}
              onChange={setSortState}
              checked={sort.value === radioIds[5]}
            ></RadioButton>
          </Form.Group>
        </Form.Row>
      </Form>
    );
  };

  const filterBody = () => {
    return (
      <Form>
        {isLoading.value ? (
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
              value={minPrice.value === 0 ? "" : minPrice.value} // Checks if the value is the default, then ignores for display
              onChange={setMinimumPrice}
            ></Form.Control>
          </Col>
          <Col>
            <Form.Control
              type="text"
              placeholder="Max"
              value={
                maxPrice.value === -1 // Checks if the value is the default, then ignores for display
                  ? ""
                  : maxPrice.value
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
        dialogClassName="filter-sort-modal mx-auto "
        show={props.show}
        onHide={props.handleCloseModal}
        centered
      >
        <Modal.Header>
          <Modal.Title>
            <Switch
              leftWord="Filter"
              rightWord="Sort"
              isOn={menuSelected.sortMenu}
              onClick={flipSwitch}
            ></Switch>
          </Modal.Title>
          <CancelButton className="filter-sort-clear-button" onClick={clearAll}>
            Clear
          </CancelButton>
        </Modal.Header>
        <Modal.Body className="filter-sort-modal-body-text">
          {menuSelected.sortMenu ? sortBody() : filterBody()}
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
