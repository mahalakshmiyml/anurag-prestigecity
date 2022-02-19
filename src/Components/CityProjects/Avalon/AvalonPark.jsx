import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import Contact from '../../Contact'
import Info from '../../Includes/Info'
import AvalonMasterPlan from './AvalonMasterPlan'
import AvalonPrice from './AvalonPrice'
import AvalonSlider from './AvalonSlider'
import OtherCityProjects2 from './OtherCityProjects2'

const AvalonPark = () => {
  return (
    <div>
    <AvalonSlider />
    <Container fluid>
      <Row>
        <Col md={9}>
          <div id="overview" className="py-3 py-md-5">
            <div className="container">
              <Row>
                <Col md={12}>
                  <h2 className="pb-2 text-center text-primary py-2 py-md-5">
                    Project Highlights
                  </h2>
                  <span className="bg-danger position-absolute start-50 span-line"></span>
                  <Table className="table table-bordered align-middle">
                    <tbody>
                      <tr>
                        <th>RERA No</th>
                        <td>PR/210928/004316</td>
                      </tr>
                      <tr>
                        <th>Development Size</th>
                        <td>6.8 Acres</td>
                      </tr>
                      <tr>
                        <th>Total No. of Units</th>
                        <td>950 units</td>
                      </tr>
                      <tr>
                        <th>No. of Rooms</th>
                        <td>4BHK</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </div>
          </div>
          <div className="py-2 py-md-2">
            <div className="container">
              <Row>
                <Col md={12}>
                  <h2 className="py-2 text-center text-primary">
                    About Avalon Park @ Prestige City
                  </h2>
                  <p>
                  Your home at Avalon Park is a well designed haven that is abundant with natural light and ventilation, thanks to imaginative and intelligent planning.
                  </p>
                  <p>
                  Open the windows and allow Mother Nature herself to keep your home cool and ventilated. The savings on power aside, there’s nothing quite like breathing in fresh air, is there? What’s more, look out of any window and you will see a tapestry of green pleasantness.
                  </p>
                  <p>
                  Finally, you have a choice of sizes and room configurations to perfectly suit your need across three-bed and four-bed homes.
                  </p>
                </Col>
              </Row>
            </div>
          </div>

          <div className="py-3 py-md-5 bg-light" id="master-plan">
            <Container>
              <Row>
                <Col md={12}>
                  <AvalonMasterPlan />
                </Col>
              </Row>
            </Container>
          </div>

          <div className="py-3 py-md-5" id="amenites">
            <Container>
              <Row className="justify-content-center">
                <h2 className="text-center text-primary py-md-3">
                  Amenities
                </h2>
                {/* <Col md={4}>
                  <ul>
                    <li>Basement Parking - 2Level</li>
                    <li>Mixed Aged Kids Playground</li>
                    <li>Outdoor Exercise Station/Gym</li>
                    <li>Swimming Pool & Kids Pool</li>
                    <li>Cricket Practice Pitch</li>
                    <li>Multisports Court</li>
                  </ul>
                </Col> */}
                <Col md={3}>
                  <ul>
                    <li>Jogging Track</li>
                    <li>Amphitheatre</li>
                    <li>Foot Reflexology</li>
                    <li>Tennis Courts</li>
                    <li>Futsal Court</li>
                    <li>Function Lawn</li>
                  </ul>
                </Col>
                <Col md={3}>
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
            </Container>
          </div>
          <div className="py-3 py-md-5" id="pricing">
            <Container>
              <Row>
                <AvalonPrice />
                <Info />
              </Row>
            </Container>
          </div>
        </Col>
        <Col md={3}>
          <Contact />
        </Col>
      </Row>
    </Container>
    <Container fluid>
      <Row>
        <Col md={12}>
          <OtherCityProjects2 />
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default AvalonPark