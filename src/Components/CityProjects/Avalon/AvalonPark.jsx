import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import Contact from '../../Contact'
import Info from '../../Includes/Info'
import AvalonMasterPlan from './AvalonMasterPlan'
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
                        <td>PR/211007/004346</td>
                      </tr>
                      <tr>
                        <th>Development Size</th>
                        <td>20.3 Acres</td>
                      </tr>
                      <tr>
                        <th>Total No. of Units</th>
                        <td>2900 (including Phase - 1, 2 &3)</td>
                      </tr>
                      <tr>
                        <th>No. of Units in Phase 1</th>
                        <td>149</td>
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
                    About The Aspen Greens @ Prestige City
                  </h2>
                  <p>
                  Your villa at Aspen Greens confers a clear mark of distinction on your address.
                  </p>
                  <p>
                  It comes to you with its own private garden area, and covered space to park two cars comfortably.
                  </p>
                  <p>
                  Planned after the principles of Spanish architecture, its layout enables you to entertain with aplomb and be the perfect host while safeguarding your privacy. For instance, its entrance is positioned so that your guests can access your living area and its accompanying lawn directly, without having to traverse your family’s personal spaces.
                  </p>
                  <p>
                  Seamlessly skirted by grassy paths, it blurs the line between the outdoors and in, enveloping you in nature’s warm embrace.
                  </p>
                  <p>
                  With four spacious bedrooms as well as a maid’s room, large balcony decks opening from the bedrooms, a central family area, and a commodious kitchen, it promises you a life that is convenient and comfortable even as it is elegant and classy.
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
                <AvalonPark />
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