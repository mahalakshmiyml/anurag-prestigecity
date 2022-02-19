import { Container, Row, Col, Image } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image1 from "../../../images/floor-plans/great-acres.png";
import Image2 from "../../../images/floor-plans/master-plan-01.png";
import Image3 from "../../../images/floor-plans/master-plan-02.png";
import Image4 from "../../../images/floor-plans/master-plan-03.png";
import Image5 from "../../../images/floor-plans/floor-plan-1.png";
import Image6 from "../../../images/floor-plans/floor-plan-2.png";
import Image7 from "../../../images/floor-plans/floor-plan-3.png";
import Image8 from "../../../images/floor-plans/floor-plan-4.png";
import Image9 from "../../../images/floor-plans/floor-plan-5.png";
import Image11 from "../../../images/floor-plans/floor-plan-6.png";
import Image12 from "../../../images/floor-plans/floor-plan-7.png";
import Image13 from "../../../images/floor-plans/floor-plan-8.png";


const GreatAcresAllImages = () => {
  const images = [
    { id: 1, imgName: Image1, alt: "", tag: "Great Acres" },
    { id: 2, imgName: Image2, alt: "", tag: "Master Plan 1" },
    { id: 3, imgName: Image3, alt: "", tag: "Master Plan 2" },
    { id: 4, imgName: Image4, alt: "", tag: "Master Plan 3" },
    { id: 5, imgName: Image5, alt: "", tag: "Floor Plan 1" },
    { id: 6, imgName: Image6, alt: "", tag: "Floor Plan 2" },
    { id: 7, imgName: Image7, alt: "", tag: "Floor Plan 3" },
    { id: 8, imgName: Image8, alt: "", tag: "Floor Plan 4" },
    { id: 9, imgName: Image9, alt: "", tag: "Floor Plan 5" },
    { id: 11, imgName: Image11, alt: "", tag: "Floor Plan 6" },
    { id: 12, imgName: Image12, alt: "", tag: "Floor Plan 7" },
    { id: 13, imgName: Image13, alt: "", tag: "Floor Plan 8" },
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

export default GreatAcresAllImages;
