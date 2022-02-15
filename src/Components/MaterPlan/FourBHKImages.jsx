import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"
import Image1 from "../../images/projects/aspen-greens/4bhk/type-a-radial-first-floor.png";
import Image2 from "../../images/projects/aspen-greens/4bhk/type-a-radial-first-floor.png";
import Image3 from "../../images/projects/aspen-greens/4bhk/type-b-radial-first-floor.png";
import Image4 from "../../images/projects/aspen-greens/4bhk/type-b-radial-ground-floor.png";
import Image5 from "../../images/projects/aspen-greens/4bhk/type-b-rectangle-first-floor.png";
import Image6 from "../../images/projects/aspen-greens/4bhk/type-b-rectangle-ground-floor.png";
import Image7 from "../../images/projects/aspen-greens/4bhk/type-b-rectangle-second-floor.png";

const FourBHKImages = () => {
  const FourBHKImages = [
    { id: 1, imgName: Image1, alt: "", tag: "Type-C Radial 1st-floor" },
    { id: 2, imgName: Image2, alt: "", tag: "Type A Radial Ground-floor" },
    { id: 3, imgName: Image3, alt: "", tag: "Type B-Radial 1st-floor" },
    { id: 4, imgName: Image4, alt: "", tag: "Type B-Radial Ground-floor" },
    { id: 5, imgName: Image5, alt: "", tag: "Type B-Rectangle 1st-floor" },
    { id: 6, imgName: Image6, alt: "", tag: "Type B-Rectangle Ground-floor" },
    { id: 7, imgName: Image7, alt: "", tag: "Type B-Rectangle 2nd-floor" },
  ];
  return (
    <div>
      <Container>
        <SimpleReactLightbox>
          <SRLWrapper>
            <Row className="g-3">
              {FourBHKImages.map((item) => (
                <Col md={3} key={item.id}>
                  <div className="m-1 text-center border rounded">
                    <a href={item.imgName}>
                      <Image
                        src={item.imgName}
                        alt={item.alt}
                        className="img-fluid"
                      />
                    </a>
                    <h6 className="text-center"> {item.tag} </h6>
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

export default FourBHKImages;
