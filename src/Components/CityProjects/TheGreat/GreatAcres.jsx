import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import Contact from '../../Contact'
import Info from '../../Includes/Info'
import GreatAcresMasterPlan from './GreatAcresMasterPlan'
import GreatAcresPrice from './GreatAcresPrice'
import GreatAcresSlider from './GreatAcresSlider'
import OtherCityProjects4 from './OtherCityProjects4'

const GreatAcres = () => {
  return (
  
    <div>
    <GreatAcresSlider />
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
                        <td>PRM/KA/RERA/1251/308/PR/210928/004316</td>
                      </tr>
                      <tr>
                        <th>Development Size</th>
                        <td>81 Acres</td>
                      </tr>
                      <tr>
                        <th>Total No. of Plots</th>
                        <td>808 Plots</td>
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
                    About The Great Acres @ Prestige City
                  </h2>
                  <p>The Prestige City is located on Sarjapur road consisting of residential apartments, plotted development, and retail spaces. It is situated in East Bengaluru with good connectivity to the rest of the city. Prestige Great Acres is a plotted layout within The Prestige City with a site area of around 81 acres.
                  </p>
                  <p>This Prestige development boasts a variety of plot sizes that cater to all requirements. The plotted development has a grand entrance with a 20M wide road, dedicated pedestrian zones, and lush gardens that greet its residents. Three main entrances on all sides of the property make accessing the site convenient for all users.
                  </p>
                  <p>
                  Lavish green spaces provide ample space to create a healthy natural environment. The elaborate pedestrian pathways with a green buffer space make a stroll through the community pleasant and safe. Almost all of the plots are oriented towards the east and the west with internal roads of a comfortable width of 12M and 9M depending on the varying requirements of the size of the plots.
                  </p>
                </Col>
              </Row>
            </div>
          </div>

          <div className="py-3 py-md-5 bg-light" id="master-plan">
            <Container>
              <Row>
                <Col md={12}>
                  <GreatAcresMasterPlan />
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
                <GreatAcresPrice />
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
          <OtherCityProjects4 />
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default GreatAcres
