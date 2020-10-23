import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModalExample = (props) => {
  const { className, title, content } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <span onClick={toggle}>{title}</span>

      <Modal
        isOpen={modal}
        toggle={toggle}
        className={className}
        size="lg"
        style={{ maxWidth: "1600px", width: "80%" }}
      >
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
