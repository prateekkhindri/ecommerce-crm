import { Children } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowModal } from "../../pages/system-state/SystemSlice";

export const CustomModal = ({ title, children, ...rest }) => {
  const dispatch = useDispatch();
  const { showModal } = useSelector((state) => state.system);
  return (
    <Modal
      show={showModal}
      onHide={() => dispatch(toggleShowModal(false))}
      {...rest}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
  );
};
