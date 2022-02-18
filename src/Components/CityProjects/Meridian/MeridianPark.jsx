import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import Contact from "../../Contact";
import Info from "../../Includes/Info";
import MeridianMasterPlan from "./MeridianMasterPlan";
import MeridianPrice from "./MeridianPrice";
import MeridianSlider from "./MeridianSlider";
import OtherCityProjects from "./OtherCityProjects";

const MeridianPark = () => {
  return (
    <div>
      <MeridianSlider />
      <Container fluid>
        <Row>
          <Col md={9}>            
              <Row className="py-md-5 bg-light">
                <Col md={12}>
                <h2 className="pb-2 text-center text-primary py-2 py-md-5">
                  Project Highlights
                </h2>
                <span className="bg-danger position-absolute start-50 span-line"></span>
                <Table className="table table-bordered align-middle">
                  <tbody>
                    <tr>
                      <th>RERA No</th>
                      <td>PR/211008/004353</td>
                    </tr>
                    <tr>
                      <th>Development Size</th>
                      <td>18.2Acres</td>
                    </tr>
                    <tr>
                      <th>Total No. of Units</th>
                      <td>2900 (including Phase - 1, 2 &3)</td>
                    </tr>
                    <tr>
                      <th>No. of Units in Phase 1</th>
                      <td>898</td>
                    </tr>
                    <tr>
                      <th>Total No. of Towers</th>
                      <td>16</td>
                    </tr>
                    <tr>
                      <th>Total No. of Towers in Phase</th>
                      <td>1 - 5</td>
                    </tr>
                    <tr>
                      <th>Towers Open for Sale</th>
                      <td>Building - 05 & Tower 6-10</td>
                    </tr>
                    <tr>
                      <th>Number of Floors</th>
                      <td>G+30 Floors</td>
                    </tr>

                    <tr>
                      <th>No. of Units per floor</th>
                      <td>6</td>
                    </tr>
                    <tr>
                      <th>No. of Lifts per Tower</th>
                      <td>3</td>
                    </tr>
                    <tr>
                      <th>Product Mix</th>
                      <td>Exclusive 3BHKs</td>
                    </tr>
                    <tr>
                      <th>Typology</th>
                      <td>
                        1387Sft - 3BR +2T <br />
                        1665Sft - 3BR + 3T <br /> 1865Sft - 3BR +3T + Maids Room
                      </td>
                    </tr>
                    <tr>
                      <th>Clubhouse Size</th>
                      <td>50000Sft (Approx.)</td>
                    </tr>
                    <tr>
                      <th>Possession</th>
                      <td>July 2025</td>
                    </tr>
                  </tbody>
                </Table>
                </Col>


              </Row>
              <Row>
                <Col md={12}>
                 <h2 className="pb-2 text-center text-primary py-2 py-md-5">About The MeridianPark @ Prestige City</h2>
                 <p>Meridian Park is a community of spacious and well-planned high-rise homes located within the upcoming ‘The Prestige City’ township, which comprises villa plots, apartments, villas and a proposed Forum retail mall.</p>
                 <p>Your home at Meridian Park is a spacious family dwelling that is designed to enable convenient and comfortable living.</p>
                 <p>Thanks to intelligent and innovative use of space, you will find that you can make optimal use of your rooms to fashion your life exactly the way you want it to be. With abundant natural light and ventilation, you will enjoy a deep sense of well-being.</p>
                 <p>Meridian Park presents three bed homes in a range of sizes. You can choose the home that suits your needs the best.</p>
                </Col>
                </Row> 
                <Row className="bg-light">
                <Col md={12}>
                <MeridianMasterPlan />        
                  </Col>    
                </Row>     
                <Row className="mb-3 py-2 py-md-5">
                  <h2 className="text-center text-primary py-md-3">Amenities</h2>
                  <Col md={4}>
                  <ul>
                    <li>Basement Parking - 2Level</li>
                    <li>Mixed Aged Kids Playground</li>
                    <li>Outdoor Exercise Station/Gym</li>
                    <li>Swimming Pool & Kids Pool</li>
                    <li>Cricket Practice Pitch</li>
                    <li>Multisports Court</li>
                  </ul>
                  </Col>
                  <Col md={4}>
                    <ul>
                      <li>Jogging Track</li>
                      <li>Amphitheatre</li>
                      <li>Foot Reflexology</li>
                      <li>Tennis Courts</li>
                      <li>Futsal Court</li>
                      <li>Function Lawn</li>
                    </ul>
                  </Col>
                  <Col md={4}>
                    <ul>
                      <li>Party Zone</li>
                      <li>Pet's Corner</li>
                      <li>Senior's Corner</li>
                      <li>Urban Farming</li>
                      <li>Pool with deck</li>
                      <li>Pavilion</li>
                    </ul>
                  </Col>                
                  
                </Row>    
                <Row>
                  <MeridianPrice />
                  <Info />
                </Row>
          </Col>
          <Col md={3}>
            <Contact />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col md={12}>
            <OtherCityProjects />

          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default MeridianPark;
