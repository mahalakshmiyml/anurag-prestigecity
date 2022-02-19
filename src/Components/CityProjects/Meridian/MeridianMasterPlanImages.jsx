import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image1 from "../../../images/projects/aspen-greens/masterplan.png";
import Image2 from "../../../images/projects/meridian/numbering-plan.png";

const MeridianMasterPlanImages = () => {
  const images = [
      { id: 1, imgName: Image1, alt: "", tag: "Master Plan" },
      { id: 2, imgName: Image2, alt: "", tag: "Numbering Plan" }];
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

export default MeridianMasterPlanImages;
