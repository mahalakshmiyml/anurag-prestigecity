import React, { useState } from "react";
import { Container, Col, Image, Row, Button } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import Image1 from "../../../images/slider/avalon-park/avalon-park-1.png";
import Image2 from "../../../images/slider/avalon-park/avalon-park-2.png";
import Logo from "../../../images/projects/avalon-park-@-the-prestige-city-logo.png"
import ContactModal from "../../Includes/ContactModal";


const AvalonSlider = () => {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const associations = [
    {
      id: 1,
      ImageUrl: Image1,
      alt: "",
    },
    {
      id: 2,
      ImageUrl: Image2,
      alt: "",
    },
  ];

  const options = {
    rewind: true,
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 2,
        nav: false,
        loop: false,
      },
    },
  };
  return ( <div>
    <OwlCarousel options={options}>
      {associations.map((item, index) => (
        <div className="mx-2" key={index}>
          <Row>
            <Col md={12}>
              <div className="text-center">
                <Image
                  src={item.ImageUrl}
                  alt={item.alt}
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
        </div>
      ))}
    </OwlCarousel>
    <div className="bg-light position-relative rounded" id="custom-content">
      <Container className="bg-white shadow p-3 position-absolute top-50 start-50 translate-middle">
        <Row className="justify-content-center">
          <Col
            md={4}
            className="col-md-4 align-self-center d-none d-md-block"
          >
            <div className="text-center">
              <Image
                src={Logo}

                alt=""
                className="img-fluid"
                style={{ height: "125px" }}
              />
            </div>
          </Col>
          <Col md={8} className="">
            <Row className="">
              <Col md={6} className="">
                <div className="m-1 text-center text-md-start">
                  <h4>Aspen Greens @ The Prestige City</h4>
                  <p className="m-0 fw-bold text-center text-md-start">
                    {" "}
                    <p>Sarjapur Main Road, Bangalore</p>
                  </p>
                </div>
              </Col>
              <Col md={6} className="align-self-center">
                <div className="btn btn-warning float-end float-md-end text-uppercase ps-5 pe-5 pt-1 pb-1 m-1 y-3">
                  <Button
                    variant="warning"
                    onClick={handleShow}
                    className="my-1"
                  >
                    Download Brouchure
                  </Button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>

    <ContactModal
      show={show}
      handleClose={handleClose}
      title="Download Brouchure"
    />
  </div>
  )
}

export default AvalonSlider
