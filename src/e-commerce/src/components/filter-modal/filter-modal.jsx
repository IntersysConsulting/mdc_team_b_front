import React from "react";
import { Modal, ModalTitle } from "react-bootstrap";
import "./filter-modal.css";
import ChangeViewButton from "../change-view-button/change-view-button.jsx";

const FilterModal = props => {
  const filterBody = () => {
    return <div></div>;
  };

  return (
    <div>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>[Here goes a switch button]</Modal.Title>
        </Modal.Header>
        {/* Here a function based on what title is selected shows different options */}
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <ChangeViewButton className="col-12">Apply</ChangeViewButton>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default FilterModal;
