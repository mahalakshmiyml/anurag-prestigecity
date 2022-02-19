import { Container, Row, Col, Image } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image1 from "../../../images/projects/eden-park/masterplan.png";
import Image2 from "../../../images/projects/eden-park/numbering-plan.png";
import Image3 from "../../../images/projects/eden-park/1BHK/type-a1-1-br-634-sq-ft.jpeg";
import Image4 from "../../../images/projects/eden-park/1BHK/type-a2-1-br-642-sq-ft.jpeg";
import Image5 from "../../../images/projects/eden-park/1BHK/type-a3-1-br-643-sq-ft.jpeg";
import Image6 from "../../../images/projects/eden-park/1BHK/type-a4-1-br-649-sq-ft.jpeg";
import Image7 from "../../../images/projects/eden-park/1BHK/type-a5-1-br-666-sq-ft.jpeg";
import Image8 from "../../../images/projects/eden-park/2BHK/type-b1-2-br-944-sq-ft.jpeg";
import Image9 from "../../../images/projects/eden-park/2BHK/type-b2-2-br-971-sq-ft.jpeg";
import Image11 from "../../../images/projects/eden-park/2BHK/type-b3-2-br-974-sq-ft.jpeg";


const EdenAllImages = () => {
  const images = [
    { id: 1, imgName: Image1, alt: "", tag: "Master Plan" },
    { id: 2, imgName: Image2, alt: "", tag: "Numbering Plan" },
    { id: 3, imgName: Image3, alt: "", tag: "Type-A1 1BHK" },
    { id: 4, imgName: Image4, alt: "", tag: "Type-A2 1BHK" },
    { id: 5, imgName: Image5, alt: "", tag: "Type-A3 1BHK" },
    { id: 6, imgName: Image6, alt: "", tag: "Type-A4 1BHK" },
    { id: 7, imgName: Image7, alt: "", tag: "Type-A5 1BHK" },
    { id: 8, imgName: Image8, alt: "", tag: "Type-B1 2BHK" },
    { id: 9, imgName: Image9, alt: "", tag: "Type-B2 2BHK" },
    { id: 11, imgName: Image11, alt: "", tag: "Type-B3 2BHK" },
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

export default EdenAllImages;
