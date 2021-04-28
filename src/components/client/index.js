import React from "react";
import List from "./clientList";
import Layout from "../../Layout";
import Form from "./clientForm";
import Tabs from "../../Layout/Tabs";
import data from "../../data";
const Clientspage = () => {
  const tabs = [
    { title: "Clients Registry", eventKey: "Table", Component: List },
    { title: "New Client", eventKey: "Form", Component: Form },
  ];
  return <Tabs tabs={tabs} />;
};

export default Layout(Clientspage);
