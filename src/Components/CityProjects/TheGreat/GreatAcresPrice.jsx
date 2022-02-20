import React, { useState } from "react";
import { Button, Col,  Row, Table } from "react-bootstrap";
import ContactModal from "../../Includes/ContactModal";

const GreatAcresPrice = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Row className="justify-content-center">
        <Col md={10} xs={12}>
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
                  <td>30 x 40 </td>
                  <td>1200 </td>
                  <td>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={handleShow}
                      className="my-3 custom-button"
                    >
                      <i className="fa fa-spinner fa-flip fa-download"></i> Sold Out
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>40 x 40 </td>
                  <td>1600 </td>
                  <td>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={handleShow}
                      className="my-3 custom-button"
                    >
                      <i className="fa fa-spinner fa-flip fa-download"></i> Sold Out
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>60 x 50 </td>
                  <td>3000 </td>
                  <td>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={handleShow}
                      className="my-3 custom-button"
                    >
                      <i className="fa fa-spinner fa-flip fa-download"></i> Price Breakup
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>40 x 70</td>
                  <td>2800</td>
                  <td>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={handleShow}
                      className="my-3 custom-button"
                    >
                      <i className="fa fa-spinner fa-flip fa-download"></i>Price Breakup
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>Odd Sizes</td>
                  <td>On Request </td>
                  <td>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={handleShow}
                      className="my-3 custom-button"
                    >
                      <i className="fa fa-spinner fa-flip fa-download"></i>Price Breakup
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>

      <ContactModal
        show={show}
        handleClose={handleClose}
        title="Download Pricesheet"
      />
    </div>
  );
};

export default GreatAcresPrice;
