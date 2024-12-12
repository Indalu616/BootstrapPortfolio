import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalApp(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        View
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="dark-color">{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="cert-img">
            <img className="img-fluid" src={props.url} alt="certificate"></img>
          </div>
          <p className="text-center dark-color mt-3">{props.desc}</p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalApp;
