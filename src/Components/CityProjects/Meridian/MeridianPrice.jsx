import React, { useState } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import ContactModal from '../../Includes/ContactModal';

const MeridianPrice = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
        
    <div id="pricing" className="bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col md={10}>
            <div className="">
              <h2 className="text-primary text-center py-3">Pricing</h2>
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
                      3 BHK + 2T
                    </td>
                    <td>1387</td>
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
                    <td>3 BHK + 3T </td>
                    <td>1665</td>
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
                  <td>3 BHK + 3T + Maids Room</td>
                    <td>1865</td>
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
    </div>
  )
}

export default MeridianPrice