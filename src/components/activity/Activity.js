import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
// import Chart from "chart.js"
import { Bar, Line, Pie } from "react-chartjs-2";
import SidebarHOC from "../../Layout";

function Activity() {
  const [chartData, setChartData] = useState({
    labels: ["Active-Clients"],
    datasets: [
      {
        label: "Active clients inside gym",
        data: [1],
        backgroundColor: ["rgba(233, 212, 96, 1)"],
      },
    ],
  });
  const [chartData2, setChartData2] = useState({
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May,",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Monthly Active Clients",
        data: [0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    ],
  });
  return (
    <>
      <div className="container">
        {/* <div>
          <Line
            data={chartData2}
            width="805px"
            height="249px"
            options={{ maintainAspectRatio: false }}
          />
        </div> */}

        <div className="row mt-5">
          <div className="col col-9 mt-5">
          <Line
            data={chartData2}
            width="805px"
            height="249px"
            options={{ maintainAspectRatio: false }}
          />
          </div>
          <div className="col col-3">
            <Pie
              data={chartData}
              width="805px"
              height="249px"
              options={{ maintainAspectRatio: false }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SidebarHOC(Activity);
