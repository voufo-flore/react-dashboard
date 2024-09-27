import React from "react";

import { CategoryScale } from "chart.js";
import { Chart, registerables } from "chart.js";
import chartdata from "./charts";

Chart.register(CategoryScale, ...registerables);
const Charts = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      
    ],
    datasets: [
      {
        label: "Users",
        data: [75, 78, 79, 45, 30, 19, 45, 90, 70, 25, 15, 100],
        backgroundColor: "rgb(127, 231, 171)",
        borderColor: "white",
        borderWidth: 0.3,
        tension: 0.1,
      },
      {
        label: "New Users",
        data: [75, 78, 79, 45, 30, 19, 45, 90, 70, 25, 15, 100],
        backgroundColor: "rgb(1, 183, 255)",
        borderColor: "whites",
        borderWidth: 0.3,
        tension: 0.1,
      },
    ],
  };
  return (
    <div>
      Charts
      <div
        className="chats-cnt"
        style={{
          display: "flex",
          flexWrap: "wrap",
          margin: '20px',
        }}
      >
        {chartdata.map((chart, index) => (
          <div key={index}>
            <div className="charts-item" style={{
                height:'100%',
                width:'400px',
                background:'white',
                margin:'40px'

            }}>
              <chart.charttype data={data} style={{
                height:'100%'
              }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Charts;
