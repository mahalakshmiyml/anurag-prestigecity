import { Container, Row, Col, Image } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image1 from "../../images/projects/aspen-greens/masterplan.png";
import Image2 from "../../images/projects/aspen-greens/numbering-plan.png";
import Image3 from "../../images/projects/aspen-greens/3bhk/type-b-radial-first-floor.png";
import Image4 from "../../images/projects/aspen-greens/3bhk/type-b-radial-ground-floor.png";
import Image5 from "../../images/projects/aspen-greens/3bhk/type-b-rectangle-first-floor.png";
import Image6 from "../../images/projects/aspen-greens/3bhk/type-b-rectangle-ground-floor.png";
import Image7 from "../../images/projects/aspen-greens/3bhk/type-c-first-floor.png";
import Image8 from "../../images/projects/aspen-greens/3bhk/type-c-ground-floor.png";
import Image9 from "../../images/projects/aspen-greens/4bhk/type-a-radial-first-floor.png";
import Image10 from "../../images/projects/aspen-greens/4bhk/type-a-radial-ground-floor.png";
import Image11 from "../../images/projects/aspen-greens/4bhk/type-b-radial-first-floor.png";
import Image12 from "../../images/projects/aspen-greens/4bhk/type-b-radial-ground-floor.png";
import Image13 from "../../images/projects/aspen-greens/4bhk/type-b-rectangle-first-floor.png";
import Image14 from "../../images/projects/aspen-greens/4bhk/type-b-rectangle-ground-floor.png";
import Image15 from "../../images/projects/aspen-greens/4bhk/type-b-rectangle-second-floor.png";

const AllImages = () => {
  const images = [
    { id: 1, imgName: Image1, alt: "", tag: "Master Plan" },
    { id: 2, imgName: Image2, alt: "", tag: "Numbering Plan" },
    { id: 3, imgName: Image3, alt: "", tag: "Type-B Radial 1st-floor" },
    { id: 4, imgName: Image4, alt: "", tag: "Type-B Radial Ground-floor" },
    { id: 5, imgName: Image5, alt: "", tag: "Type-B Rectangle 1st-floor" },
    { id: 6, imgName: Image6, alt: "", tag: "Type-B Rectangle Ground-floor" },
    { id: 7, imgName: Image7, alt: "", tag: "Type-C 1st-floor" },
    { id: 8, imgName: Image8, alt: "", tag: "Type-C Ground-floor" },
    { id: 9, imgName: Image9, alt: "", tag: "Type-C Radial 1st-floor" },
    { id: 10, imgName: Image10, alt: "", tag: "Type A Radial Ground-floor" },
    { id: 11, imgName: Image11, alt: "", tag: "Type B-Radial 1st-floor" },
    { id: 12, imgName: Image12, alt: "", tag: "Type B-Radial Ground-floor" },
    { id: 13, imgName: Image13, alt: "", tag: "Type B-Rectangle 1st-floor" },
    { id: 14, imgName: Image14, alt: "", tag: "Type B-Rectangle Ground-floor" },
    { id: 15, imgName: Image15, alt: "", tag: "Type B-Rectangle 2nd-floor" },
  ];

  return (
    <div>
      <Container>
        <SimpleReactLightbox>
          <SRLWrapper>
            <Row className="g-3 justify-content-center">
              {images.map((item) => (
                <Col md={4} key={item.id}>
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

export default AllImages;
