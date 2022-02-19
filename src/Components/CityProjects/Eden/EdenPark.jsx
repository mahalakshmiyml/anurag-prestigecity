import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import Contact from '../../Contact'
import Info from '../../Includes/Info'
import EdenMasterPlan from './EdenMasterPlan'
import EdenSlider from './EdenSlider'
import OtherCityProjects3 from './OtherCityProjects3'
import EdenPrice from './EdenPrice'

const EdenPark = () => {
  return (
    <div>
    <EdenSlider />
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
                        <td>PR/211008/004353</td>
                      </tr>
                      <tr>
                        <th>Development Size</th>
                        <td>9.7 Acres</td>
                      </tr>
                      <tr>
                        <th>Total No. of Units</th>
                        <td>2217  units</td>
                      </tr>
                      <tr>
                        <th>No. of Rooms</th>
                        <td>1 & 2 BHK</td>
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
                    About Eden Park @ Prestige City
                  </h2>
                  <p>
                  Your home at Eden Park is a snug and cosy dwelling that is flush with fresh air and bright with natural light.
                  </p>
                  <p>
                  You have optimum floor space to plan your life the way you feel most comfortable. And you look out onto the pleasantest of views.
                  </p>
                  <p>
                  All of which contributes to a great sense of wellbeing and has been made possible by some creative and astute planning.
                  </p>
                  <p>
                  Finally, you have a choice of sizes in one-bed and two-bed homes to perfectly suit your need.
                  </p>
                </Col>
              </Row>
            </div>
          </div>

          <div className="py-3 py-md-5 bg-light" id="master-plan">
            <Container>
              <Row>
                <Col md={12}>
                  <EdenMasterPlan />
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
                <EdenPrice />
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
          <OtherCityProjects3 />
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default EdenPark