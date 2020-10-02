import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModalExample = (props) => {
  const { className, title, content } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <FontAwesomeIcon
        icon="question-circle"
        onClick={toggle}
        style={{ display: "flex" }}
      />

      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>{content}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Nice!
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
