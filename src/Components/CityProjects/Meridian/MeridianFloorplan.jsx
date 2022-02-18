
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image1 from "../../../images/projects/meridian/3bhk-type-d2.png";
import Image2 from "../../../images/projects/meridian/floor-plans/3bhk-type-E8.png";
import Image3 from "../../../images/projects/meridian/floor-plans/3bhk-type-F1.png";
import Image4 from "../../../images/projects/meridian/floor-plans/3bhk-type-F2.png";

const MeridianFloorplan = () => {
  const ThreeBHKImages = [
    
    { id: 1, imgName: Image1, alt: "", tag: "Type-B Radial 1st-floor" },
    { id: 2, imgName: Image2, alt: "", tag: "Type-B Radial Ground-floor" },
    { id: 3, imgName: Image3, alt: "", tag: "Type-B Rectangle 1st-floor" },
    { id: 4, imgName: Image4, alt: "", tag: "Type-B Rectangle Ground-floor" },
  ];

  return (
    <div>
      <Container>
        <SimpleReactLightbox>
          <SRLWrapper>
            <Row className="g-3">
              {ThreeBHKImages.map((item) => (
                <Col md={3} key={item.id}>
                  <div className="m-1 text-center border rounded">
                    <a href={item.imgName}>
                      <Image
                        src={item.imgName}
                        alt={item.alt}
                        className="img-fluid"
                      />
                    </a><h6 className="text-center"> {item.tag} </h6>
                  </div>
                </Col>
              ))}
            </Row>
          </SRLWrapper>
        </SimpleReactLightbox>
      </Container>
    </div>
  );
};

export default MeridianFloorplan;
