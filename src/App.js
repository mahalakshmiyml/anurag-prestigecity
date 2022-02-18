import "./App.scss";
import TopHeader from "./Components/Includes/TopHeader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import About from "./Components/About";
// import Amenities from "./Components/Amenities";
// import Overview from "./Components/Overview";
// import Gallery from "./Components/Gallery";
// import SideForm from "./Components/SideForm";
import Footer from "./Components/Includes/Footer";
import Home from "./Components/Home";
import MeridianPark from "./Components/CityProjects/Meridian/MeridianPark";
import EdenPark from "./Components/CityProjects/EdenPark";
import AvalonPark from "./Components/CityProjects/AvalonPark";
import AspenGreens from "./Components/CityProjects/AspenGreens";
import GreatAcres from "./Components/CityProjects/GreatAcres";
import About from "./Components/About";
// import Location from "./Components/Location";
// import Pricing from "./Components/Pricing";
// import MasterPlan from "./Components/MaterPlan/MasterPlan";
// import VirtualTour from "./Components/VirtualTour";
// import Contact from "./Components/Contact";
// import FixedIcons from "./Components/FixedIcons";
// import { Col, Container, Row } from "react-bootstrap";
// import ProjectHighlights from "./Components/ProjectHighlights";
// import Home from "./Components/Home";

function App() {
  return (
    <>
    <Router>
      <TopHeader />
      
      <Routes>
      <Route path="/" index element={<Home />}></Route>
      <Route path="/city-projects/meridian/meridian-park" element={<MeridianPark />}></Route>
      <Route path="/city-projects/eden-park" element={<EdenPark />}></Route>
      <Route path="/city-projects/avalon-park" element={<AvalonPark />}></Route>
      <Route path="/city-projects/aspen-greens" element={<AspenGreens />}></Route>
      <Route path="/city-projects/great-acres" element={<GreatAcres />}></Route>


 
        </Routes>
        <About />
        <Footer />
    
      </Router>
    </>
  );
}

export default App;
