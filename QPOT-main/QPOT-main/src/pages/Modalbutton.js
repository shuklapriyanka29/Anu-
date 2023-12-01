import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class Modalbutton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smShow: false,
      lgShow: false
    };
  }

  render() {
    const [smShow, setSmShow] =  this.state;
    const [lgShow, setLgShow] =  this.state;
  
    return (
      <>
      <Button onClick={() => setSmShow(true)} className="me-2">
        Small modal
      </Button>
      <Button onClick={() => setLgShow(true)}>Large modal</Button>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Small Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
        </>
    )
  }

}