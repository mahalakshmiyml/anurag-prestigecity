import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";

const ProjectHighlights = () => {
  return (
    <div className="py-3 py-md-5">
      <Container>
        <Row>
          <Col md={12} classname="py-3 py-md-3 line position-relative">
            <h2 className="pb-2 text-center text-primary py-3 py-md-5">Project Highlights</h2>
            <span className="bg-danger position-absolute start-50 span-line"></span>
            <Table className="table table-bordered align-middle">
              <tbody>
                <tr>
                  <th>RERA No</th>
                  <td>PR/211007/004346</td>
                </tr>
                <tr>
                  <th>Development Size</th>
                  <td>39 Acres</td>
                </tr>
                <tr>
                  <th>Number of Units</th>
                  <td>243 Villas</td>
                </tr>
                <tr>
                  <th>Number of Floors</th>
                  <td>G+1, G+2 Floors</td>
                </tr>

                <tr>
                  <th>Bedrooms</th>
                  <td>3 BHK and 4 BHK</td>
                </tr>
                <tr>
                  <th>Phase</th>
                  <td>
                    Phase 1 - Sold Out, <br />
                    Launching New Phase
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProjectHighlights;
