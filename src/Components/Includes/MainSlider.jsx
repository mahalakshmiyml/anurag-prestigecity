import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import Image1 from "../../images/slider/image-1.png";
import Image2 from "../../images/slider/image-2.png";
import Image3 from "../../images/slider/image-3.png";
import Logo from "../../images/logo-1.png";

const MainSlider = () => {
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
    {
      id: 3,
      ImageUrl: Image3,
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

  return (
    <div>
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
                    <h2>Sterling Villa Grande</h2>
                    <p className="m-0 fw-bold text-center text-md-start">
                      {" "}
                      3 & 4 BHK Villas Starts @ 3.5 Cr* Onwards
                    </p>
                    <p className="text-center text-md-start">
                      {" "}
                      Whitefield - Hoskote Rd, Bangalore
                    </p>
                  </div>
                </Col>
                <Col md={6} className="align-self-center">
                  <div className="text-center text-md-start">
                    <a
                      href="javascript"
                      className="btn btn-primary m-1 text-uppercase ps-5 pe-5 pt-2 pb-2"
                      data-bs-toggle="modal" 
                      data-bs-target="#modal" rel="noreferrer noopener"
                    >
                      Download Brochure
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MainSlider;
