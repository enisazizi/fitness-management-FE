import React from "react";
import Sidebar from "./Sidebar";

const ComponentLayout = (Component) => {
  const LayoutComponent = () => {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 bg-primary">
            <Sidebar />
          </div>
          <div className="col-10 mt-5 pt-5">
            <div className="row row-cols-1">
              <div className="col" style={{height:"50px"}}>
              </div>
              <div className="col">
                <Component {...Component.props} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return LayoutComponent;
};

export default ComponentLayout;
