
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image1 from "../../../images/floor-plans/floor-plan-1.png";
import Image2 from "../../../images/floor-plans/floor-plan-2.png";
import Image3 from "../../../images/floor-plans/floor-plan-3.png";
import Image4 from "../../../images/floor-plans/floor-plan-4.png";
import Image5 from "../../../images/floor-plans/floor-plan-5.png";
import Image6 from "../../../images/floor-plans/floor-plan-6.png";
import Image7 from "../../../images/floor-plans/floor-plan-7.png";
import Image8 from "../../../images/floor-plans/floor-plan-8.png";

const GreatAcresFloorPlan = () => {
  const ThreeBHKImages = [
    
    { id: 1, imgName: Image1, alt: "", tag: "Type-A1 1-Bed" },
    { id: 2, imgName: Image2, alt: "", tag: "Type-A2 1-Bed" },
    { id: 3, imgName: Image3, alt: "", tag: "Type-A3 1-Bed" },
    { id: 4, imgName: Image4, alt: "", tag: "Type-A4 1-Bed" },
    { id: 5, imgName: Image5, alt: "", tag: "Type-A5 1-Bed" },
    { id: 6, imgName: Image6, alt: "", tag: "Type-A5 1-Bed" },
    { id: 7, imgName: Image7, alt: "", tag: "Type-A5 1-Bed" },
    { id: 8, imgName: Image8, alt: "", tag: "Type-A5 1-Bed" },
    
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
                    </a>
                  </div>
                  <h6 className="text-center"> {item.tag} </h6>
                </Col>
              ))}
            </Row>
          </SRLWrapper>
        </SimpleReactLightbox>
      </Container>
    </div>
  );
};

export default GreatAcresFloorPlan;
