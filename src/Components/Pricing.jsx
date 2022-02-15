import React, { useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import ContactModal from "./Includes/ContactModal";

const Pricing = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div id="pricing" className="bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col md={10}>
            <div className="">
              <h2 className="text-primary text-center py-2">Pricing</h2>
              <Table
                responsive="sm"
                className="align-middle text-center border-transparent"
                striped
                bordered
                hover
              >
                <thead>
                  <tr>
                    <th>BHK</th>
                    <th>Area (Sq.ft)</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      3 BHK <br /> Type C
                    </td>
                    <td>3000</td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={handleShow}
                        className="my-3"
                      >
                        Download Price Sheet
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>3 BHK <br /> Type B <br />Rectangular</td>
                    <td>3500</td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={handleShow}
                        className="my-3"
                      >
                        Download Price Sheet
                      </Button>
                    </td>
                  </tr>{" "}
                  <tr>
                  <td>3 BHK <br /> Type B <br />Radial</td>
                    <td>3750</td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={handleShow}
                        className="my-3"
                      >
                        Download Price Sheet
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      4 BHK + G+2
                      <br /> Type B<br />Rectangular
                    </td>
                    <td>3500</td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={handleShow}
                        className="my-3"
                      >
                        Download Price Sheet
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      4 BHK <br /> Type A<br />Radial
                    </td>
                    <td>Approx 4675 sqft</td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={handleShow}
                        className="my-3"
                      >
                        Download Price Sheet
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
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

export default Pricing;
