import React, { Component } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Button
} from "reactstrap";
class AddModal extends Component {
    closeModal= () => {
        this.props.closeModal();
    }
  render() {
    return (
      <div id="addModalData">
        <Modal isOpen={true} className={this.props.className}>
          <ModalHeader toggle={this.closeModal}>Edit</ModalHeader>
          <ModalBody>
            <Input
              type="text"
              id="name"
              placeholder="Enter Listitem"
              required
              autoComplete="off"
              autoFocus
            />
          </ModalBody>
          <ModalFooter>
            <Button color="primary">Save</Button>{" "}
            <Button color="secondary" onClick={this.closeModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default AddModal;
