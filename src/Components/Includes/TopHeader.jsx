import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Image,
  Row,
  Col,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../images/logo-1.png";
import image1 from "../../images/projects/meridian/slider/image-3.png";
import image2 from "../../images/slider/eden-park/eden-park-1.png";
import image3 from "../../images/slider/avalon-park/avalon-park-2.png";
import image4 from "../../images/slider/aspen-greens/aspen-greens-3.png";
import image5 from "../../images/slider/the-great-acres/the-great-acres-4.png";

const TopHeader = () => {
  return (
    <div className="sticky-top" id="navbar">
      <div id="top-header" className="p-2 p-md-1 bg-warning">
        <Container>
          <Row className="justify-content-center">
            <Col
              md={4}
              className="d-none d-md-block text-white fw-bold align-self-center"
            >
              <i className="fa fa-map-marker-alt"></i> Sarjapur Rd Bangalore.
            </Col>
            <Col md={4} xs={5} className="align-self-center">
              <div className="text-center">
                <a className="btn btn-dark" data-bs-toggle="" data-bs-target="">
                  <i className="fa fa-spinner fa-flip fa-download"></i> Brochure
                </a>
              </div>
            </Col>
            <Col md={4} xs={7} className="align-self-center">
              <div className="text-center">
                <a
                  href="tel:+918095999000"
                  className="anchor btn btn-transparent fw-bold text-white m-1"
                >
                  +91-80959 99000
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="light"
        className="shadow-sm bg-white"
      >
        <Container>
          <Navbar.Brand href="/">
            <Image src={Logo} className="img-fluid" alt="" width="125" />
          </Navbar.Brand>
          <Nav.Link
            className="btn-sm btn-danger text-white d-block d-md-none px-3 border-0"
            href="tel:080959 99000 "
          >
            <i className="fa fa-phone-volume"></i> 80959 99000
          </Nav.Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#overview">Overview</Nav.Link>
              <NavDropdown
                className="d-block d-md-none"
                title="The Prestige City Projects"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item
                  as={Link}
                  to="/city-projects/meridian/meridian-park"
                >
                  Meridian Park
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as={Link}
                  to="/city-projects/avalon/avalon-park"
                >
                  Avalon Park
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as={Link}
                  to="/city-projects/aspen/aspen-greens"
                >
                  Aspen Greens
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/city-projects/eden/eden-park">
                  Eden Park
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as={Link}
                  to="/city-projects/the-great/great-acres"
                >
                  Great Acres
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className="d-none d-md-block menu-area"
                title="The Prestige City Projects"
                id="collasible-nav-dropdown"
              >
                <Container>
                  <Row className="text-center">
                    <Col md={3}>
                      <NavDropdown.Item
                        as={Link}
                        to="/city-projects/meridian/meridian-park"
                        className="fs-5 fw-bold text-primary"
                      >
                        Meridian Park
                      </NavDropdown.Item>
                      <div className="position-relative">
                        <a
                          className="text-decoration-none"
                          as={Link}
                          to="/city-projects/meridian/meridian-park"
                        >
                          <Image className="img-fluid" alt="" src={image1} />
                          <span className="position-absolute top-0 end-0 badge rounded-pill bg-danger m-1">
                            Coming Soon
                          </span>
                          <p className="text-dark m-0 py-2 text-primary text-center">
                            Excl. 3 Bed Apartments
                          </p>
                        </a>
                      </div>
                    </Col>

                    <Col md={3}>
                      <NavDropdown.Item
                        as={Link}
                        to="/city-projects/eden/eden-park"
                        className="fs-5 fw-bold text-primary"
                      >
                        Eden Park
                      </NavDropdown.Item>
                      <div className="position-relative">
                        <a
                          className="text-decoration-none"
                          as={Link}
                          to="/city-projects/eden/eden-park"
                        >
                          <Image className="img-fluid" alt="" src={image2} />
                          <span className="position-absolute top-0 end-0 badge rounded-pill bg-danger m-1">
                            Coming Soon
                          </span>
                          <p className="text-dark m-0 py-2 text-primary text-center">
                            1BHK & 2BHK Bed Apartments
                          </p>
                        </a>
                      </div>
                    </Col>

                    <Col md={3}>
                      <NavDropdown.Item
                        as={Link}
                        to="/city-projects/avalon/avalon-park"
                        className="fs-5 fw-bold text-primary"
                      >
                        Avalon Park
                      </NavDropdown.Item>
                      <div className="position-relative">
                        <a
                          className="text-decoration-none"
                          as={Link}
                          to="/city-projects/avalon/avalon-park"
                        >
                          <Image className="img-fluid" alt="" src={image3} />
                          <span className="position-absolute top-0 end-0 badge rounded-pill bg-danger m-1">
                            Coming Soon
                          </span>
                          <p className="text-dark m-0 py-2 text-primary text-center">
                            3BHK & 4BHK Apartments
                          </p>
                        </a>
                      </div>
                    </Col>

                    <Col md={3}>
                      <NavDropdown.Item
                        as={Link}
                        to="/city-projects/aspen/aspen-greens"
                        className="fs-5 fw-bold text-primary"
                      >
                        Aspen Greens
                      </NavDropdown.Item>
                      <div className="position-relative">
                        <a
                          className="text-decoration-none"
                          as={Link}
                          to="/city-projects/aspen/aspen-greens"
                        >
                          <Image className="img-fluid" alt="" src={image4} />
                          <span className="position-absolute top-0 end-0 badge rounded-pill bg-danger m-1">
                            Coming Soon
                          </span>
                          <p className="text-dark m-0 py-2 text-primary text-center">
                            4BHK Villas
                          </p>
                        </a>
                      </div>
                    </Col>

                    <Col md={3}>
                      <NavDropdown.Item
                        href="/city-projects/the-great/-acres"
                        className="fs-5 fw-bold text-primary"
                      >
                        Great Acres
                      </NavDropdown.Item>
                      <a
                        className="text-decoration-none"
                        as={Link}
                        to="/city-projects/the-great/great-acres"
                      >
                        <div className="position-relative">
                          <Image className="img-fluid" alt="" src={image5} />
                          <span className="position-absolute top-0 end-0 badge rounded-pill bg-danger m-1">
                            Coming Soon
                          </span>
                          <p className="text-dark m-0 py-2 text-primary text-center">
                            Plots
                          </p>
                        </div>
                      </a>
                    </Col>
                  </Row>
                </Container>
              </NavDropdown>

              <Nav.Link href="#master-plan">Master Plan</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#virtual-tour">Virtual Tour</Nav.Link>
            </Nav>
            {/* <Nav>
              <Nav.Link
                className="btn-sm btn-danger text-white"
                href="tel:080959 99000"
              >
                <i className="fa fa-phone-volume"></i> + 91 80959 99000
              </Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopHeader;
