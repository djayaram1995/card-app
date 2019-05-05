import React, { Component } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Button,
  Label
} from "reactstrap";
import "./AddModal.css";
class AddModal extends Component {
  closeModal = () => {
    this.props.closeModal();
  };
  render() {
    return (
      <Modal isOpen={true} id="addModalData" className={this.props.className}>
        <ModalHeader toggle={this.closeModal}>Edit</ModalHeader>
        <ModalBody>
          <Label htmlFor="listItem">Listitem</Label>
          <Input
            type="textarea"
            id="name"
            name="listItem"
            className="textList"
            placeholder="Enter Listitem"
            required
            autoComplete="off"
            autoFocus
          />
          <Label htmlFor="listFile">ListFile</Label>
          <Input
          type="file"
          name="listFile"
          multiple
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary">Save</Button>{" "}
          <Button color="secondary" onClick={this.closeModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
export default AddModal;
