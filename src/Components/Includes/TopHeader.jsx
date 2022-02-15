import React from "react";
import { Container, Navbar, Nav, Image, Row, Col } from "react-bootstrap";
import Logo from "../../images/logo-1.png";

const TopHeader = () => {
  return (
    <div className="sticky-top" id="navbar">
      <div id="top-header" className="p-2 p-md-1 bg-warning">
        <Container>
          <Row className="justify-content-center">
            <Col md={4} className="d-none d-md-block text-white fw-bold align-self-center">
              <i className="fa fa-map-marker-alt"></i> Whitefield - Hoskote Rd
              Bangalore.
            </Col>
            <Col md={4} sm={5} className="align-self-center">
              <div className="text-center">
                <a
                  className="btn btn-dark"
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                >
                  <i className="fa fa-spinner fa-flip fa-download"></i> Brochure
                </a>
              </div>
            </Col>
            <Col md={4} sm={7} className="align-self-center">
              <div className="text-center">
                <a
                  href="tel:+918095999000"
                  className="anchor btn btn-transparent fw-bold text-white m-1"
                >
                  <i className="fa fa-phone-volume"></i> +91-80959 99000
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
            <Image src={Logo} className="img-fluid" alt="" />
          </Navbar.Brand>
          <Nav.Link
            className="btn-sm btn-danger text-white d-block d-md-none"
            href="tel:080959 99000 "
          >
            <i className="fa fa-phone-volume"></i>  80959 99000
          </Nav.Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto me-auto">
              <Nav.Link href="#overview">Overview</Nav.Link>
              <Nav.Link href="#master-plan">Master Plan</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#virtual-tour">Virtual Tour</Nav.Link>
              <Nav.Link href="#location">Location</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                className="btn-sm btn-danger text-white"
                href="tel:080959 99000"
              >
                <i className="fa fa-phone-volume"></i> + 91 80959 99000
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopHeader;
