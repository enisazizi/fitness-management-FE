import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
// import Chart from "chart.js"
import { Bar, Line, Pie } from "react-chartjs-2";
import SidebarHOC from "../../Layout";
import {api} from "../../data/api"

function Activity() {
 
  const [chartData, setChartData] = useState({
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
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    ],
  });
  const [onlineClients,setOnlineSclients] = useState(0)
  useEffect( async () => {
    const response = await api.getOnlineClients()
    
   setOnlineSclients({
    labels: ["Active-Clients"],
    datasets: [
      {
        label: "Active clients inside gym",
        data: [response.data.length],
        backgroundColor: ["rgba(233, 212, 96, 1)"],
      },
    ],
  })
    console.log("Hello",response.data.length)
    const res = await api.getClients()
    console.log("helli2",res)
    setChartData({
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
          data: [0, 0, 0, res.length, 0, 0, 0, 0, 0, 0, 0, 0],
        },
      ],
    })
  }, [])


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
            data={chartData}
            width="805px"
            height="249px"
            options={{ maintainAspectRatio: false }}
          />
          </div>
          <div className="col col-3">
            <Pie
              data={onlineClients}
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
