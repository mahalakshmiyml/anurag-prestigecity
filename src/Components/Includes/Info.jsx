import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ContactModal from "./ContactModal"

const Info = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div
      id="information"
      className="pt-3 pb-3 pt-md-3 pb-md-3 rounded"
    >
      <Container>
        <Row className="border-start border-5 bg-white shadow border-dark p-2">
          <Col md={9}>
            <h2>Need more information?</h2>
            <p class="m-0">
              Don't hesitate to download the brochure to know more details of
              this project.
            </p>
          </Col>
          <Col md={3} className="align-self-center text-center">
            <Button variant="primary" onClick={handleShow} className="my-3">
              Enquire Now
            </Button>
          </Col>
        </Row>
      </Container>
      <ContactModal
        show={show}
        handleClose={handleClose}
        title="Download Pricesheet"
      />
    </div>
  );

};

export default Info;
