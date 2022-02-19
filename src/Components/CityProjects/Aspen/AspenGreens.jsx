import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import Contact from '../../Contact'
import Info from '../../Includes/Info'
import AspenSlider from './AspenSlider'

const AspenGreens = () => {
  return (
  <div>
    <AspenSlider />
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
                    <td>PR/211007/004346</td>
                  </tr>
                  <tr>
                    <th>Development Size</th>
                    <td>20.3 Acres</td>
                  </tr>
                  <tr>
                    <th>Total No. of Units</th>
                    <td>149 units</td>
                  </tr>
                  <tr>
                    <th>No. of Rooms</th>
                    <td>4BHK</td>
                  </tr>
                </tbody>
              </Table>
              </Col>


            </Row>
            <Row>
              <Col md={12}>
               <h2 className="pb-2 text-center text-primary py-2 py-md-5">About The Aspen Greens Park@ Prestige City</h2>
               <p>Your villa at Aspen Greens confers a clear mark of distinction on your address.</p>
               <p>Your home at Meridian Park is a spacious family dwelling that is designed to enable convenient and comfortable living.</p>
               <p>Planned after the principles of Spanish architecture, its layout enables you to entertain with aplomb and be the perfect host while safeguarding your privacy. For instance, its entrance is positioned so that your guests can access your living area and its accompanying lawn directly, without having to traverse your family’s personal spaces.</p>
               <p>Seamlessly skirted by grassy paths, it blurs the line between the outdoors and in, enveloping you in nature’s warm embrace.</p>
               <p>With four spacious bedrooms as well as a maid’s room, large balcony decks opening from the bedrooms, a central family area, and a commodious kitchen, it promises you a life that is convenient and comfortable even as it is elegant and classy.</p>
              </Col>
              </Row> 
              <Row className="bg-light">
              <Col md={12}>
              {/* <MeridianMasterPlan />         */}
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
                {/* <MeridianPrice /> */}
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
          {/* <OtherCityProjects /> */}

        </Col>
      </Row>
    </Container>

  </div>
  )
}

export default AspenGreens