import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  
} from "react-bootstrap";
import { Link } from 'react-router-dom';
import image1 from "../../../images/projects/meridian/slider/image-3.png"
import image2 from "../../../images/slider/eden-park/eden-park-2.png"
import image4 from "../../../images/slider/aspen-greens/aspen-greens-1.png"
import image5 from "../../../images/slider/the-great-acres/the-great-acres-1.png"


const OtherCityProjects2 = () => {
  const projects = [{ 
    id: 1, 
    title: "Meridian Park",
    location:"Sarjapur Road",
    description: "3 Bed Appartments",
    imageurl: image1,
    link: "/city-projects/meridian/meridian-park",
    status:"Coming Soon"

},
{ id: 2, 
    title: "Eden Park",
    location:"Sarjapur Road",
    description: "1/2 Bed Appartments",
    imageurl: image2,
    link: "/city-projects/eden/eden-park",
    status:"New Launch"

},
{ id: 3, 
    title: "Aspen Greens",
    location:"Sarjapur Road",
    description: "4BHK Villas ",
    imageurl: image4,
    link: "/city-projects/aspen/aspen-greens",
    status:"New Launch"

},
{ id: 4, 
    title: "The Great Acres",
    location:"Sarjapur Road",
    description: "Plots",
    imageurl: image5,
    link: "/city-projects/the-great/great-acres",
    status:"On Going"

},


];
  return (
    <div className="bg-light">
      <Container className="pb-md-4 pt-md-3">
        <Row className="justify-content-center g-3">
            <h2 className="py-3 text-primary text-center">Other Prestige City Projects</h2> 
          {projects.map((project) => (
            <Col md={3} key={project.id}>
              <Card>
                <Card.Img variant="top" src={project.imageurl} className="position-relative" />
                  <h6 class="position-absolute end-0 bg-danger m-3 rounded-pill text-white p-2">{project.status}</h6>
                <Card.Body className="text-center">
                  <Card.Title>{project.title}</Card.Title>

                  <Card.Text >{project.location}</Card.Text>
                  <h4 className="">{project.description}</h4>
                  <div className="text-center">
                  <Button
                    variant="primary"
                    as={Link}
                    to={project.link}
                    className=""
                  >
                    Read More
                  </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default OtherCityProjects2;
