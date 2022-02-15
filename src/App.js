import "./App.scss";
import TopHeader from "./Components/Includes/TopHeader";
import MainSlider from "./Components/Includes/MainSlider";
// import About from "./Components/About";
import Amenities from "./Components/Amenities";
import Overview from "./Components/Overview";
// import Gallery from "./Components/Gallery";
// import SideForm from "./Components/SideForm";
import Footer from "./Components/Includes/Footer";
import Location from "./Components/Location";
import Pricing from "./Components/Pricing";
import MasterPlan from "./Components/MaterPlan/MasterPlan";
import VirtualTour from "./Components/VirtualTour";
import Contact from "./Components/Contact";
import FixedIcons from "./Components/FixedIcons";
import { Col, Container, Row } from "react-bootstrap";
import ProjectHighlights from "./Components/ProjectHighlights";

function App() {
  return (
    <>
      <TopHeader />
      <MainSlider />
      <div className="">
        <Container fluid>
          <Row>
            <Col md={9}>
              <ProjectHighlights />
              <Overview />
              <MasterPlan />
              <Pricing />
              {/* <Gallery /> */}
              <Amenities />
              <VirtualTour />
              {/* <SideForm /> */}
              <Location />
              <FixedIcons />
            </Col>
            <Col md={3}>
              <Contact />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
}

export default App;
