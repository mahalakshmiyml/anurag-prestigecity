import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image1 from "../../../images/floor-plans/great-acres.png";
import Image2 from "../../../images/floor-plans/master-plan-01.png";
import Image3 from "../../../images/floor-plans/master-plan-02.png";
import Image4 from "../../../images/floor-plans/master-plan-03.png";

const GreatAcresMasterPlanImages = () => {
  const images = [
      { id: 1, imgName: Image1, alt: "", tag: "Great Acres" },
      { id: 2, imgName: Image2, alt: "", tag: "Master Plan 1" },
      { id: 3, imgName: Image3, alt: "", tag: "Master Plan 2" },
      { id: 4, imgName: Image4, alt: "", tag: "Master Plan 3" }
    ];
  return (
    <div>
      <Container>
        <SimpleReactLightbox>
          <SRLWrapper>
            <Row className="g-3">
              {images.map((item) => (
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

export default GreatAcresMasterPlanImages;
