import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const SuccessApplyModal = forwardRef((props, ref) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  useImperativeHandle(ref, () => {
    return { toggle: toggle };
  });

  return (
    <div>
      {/* <Button color="danger" onClick={toggle}>
        {buttonLabel}
      </Button> */}
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{props.title}</ModalHeader>
        <ModalBody>{props.body}</ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
});

export default SuccessApplyModal;
