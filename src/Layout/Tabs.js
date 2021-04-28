import React from "react";
import { Tabs, Tab } from "react-bootstrap";

const TabsLayout = ({ tabs }) => {
  return (
    <Tabs defaultActiveKey={tabs[0].eventKey} id="uncontrolled-tab-example">
      {tabs.map((e, i) => {
        return (
          <Tab key={i} title={e.title} eventKey={e.eventKey}>
            {<e.Component />}
          </Tab>
        );
      })}
    </Tabs>
  );
};

export default TabsLayout;
