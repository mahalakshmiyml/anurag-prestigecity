import React, { useState } from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import MeridianAllImages from "./MeridianAllImages";
import MeridianFloorplan from "./MeridianFloorplan";
import MeridianMasterPlanImages from "./MeridianMasterPlanImages";

const MeridianMasterPlan = () => {
    const [key, setKey] = useState("all")

    

  return (
    <div>
    <div id="master-plan" className="pt-3 pb-3 pt-md-5 pb-md-5">
      <h2 className="pt-2 pb-2 text-center text-primary">
        Master Plan & Floor Plans
      </h2>
      <Container>
        <Row>
          <Col>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3 text-dark"
            >
              <Tab eventKey="all" title="All" className="text-dark">
                <MeridianAllImages />
              </Tab>
              <Tab eventKey="matster-plan" title="Master Plan" className="text-dark">
                <MeridianMasterPlanImages />
              </Tab>
              <Tab eventKey="three-bhk" title="Floor-Plan">
                {<MeridianFloorplan />}
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
  );
};

export default MeridianMasterPlan;
