import React from "react";
import {  Col, Container, Row } from "react-bootstrap";
// import aboutImage from "../images/slider/image-2.png"
// import ContactModal from "./Includes/ContactModal";

const About = () => {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

  // useEffect(() => {
  //   setTimeout(function () {
  //     setShow(true);
  //   }, 7000);
  // }, []);

  return (
    <div id="about" className="py-3 py-md-5">
      <Container>
        <Row>
          <Col md={12} className="align-self-center">
            <div className="">
              <h2 className="py-2 text-primary text-uppercase">Aboout Developer</h2>
            <p>Serving you since 1983......</p>
            <p>Sterling Developers has been one of the pioneers of the real estate industry in Bengaluru. Founded in 1983, we have been changing the landscape of Bengaluru for over three decades. Our dedication to providing not just a house but a home to all our customers has earned us the reputation of a trusted developer that focuses on design and quality in all projects. Sterling Developers was founded by Ramani Sastri – Chairman and Managing Director, whose farsightedness combined with the diligence of Shankar Sastri – Joint Managing Director has shaped our reputation for excellence in creating value for our customers. Under their leadership, we have built some of the best properties in Bengaluru, including premium apartments and exquisite villas.</p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* <ContactModal show={show} handleClose={handleClose} title="Download Brochure"/> */}
    </div>
  );
};

export default About;
