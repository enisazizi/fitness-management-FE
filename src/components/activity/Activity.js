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
        data: [100, 80, 300, 400, 200, 200, 150, 300, 100, 250, 200, 300],
      },
    ],
  });
  return (
    <>
      <div className="container">
        <div>
          <Line
            data={chartData2}
            width="805px"
            height="249px"
            options={{ maintainAspectRatio: false }}
          />
        </div>

        <div className="row mt-5">
          <div className="col col-9 mt-5">
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ width: "20px" }}>1</td>
                  <td>Detart</td>
                  <td>Grajqevci</td>
                  <td>Koperi</td>
                </tr>
                <tr>
                  <td style={{ width: "20px" }}>2</td>
                  <td>Enis</td>
                  <td>Azizi</td>
                  <td>Enith</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Ermal</td>
                  <td>Asllani</td>
                  <td>Cipa</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Leon </td>
                  <td>Abimi</td>
                  <td>Cincra</td>
                </tr>
              </tbody>
            </Table>
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
