import React from "react";
import { Line, Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { Chart, registerables } from "chart.js";
import { MoveDown, MoveUp, ShoppingCart, UserPlus, Users } from "lucide-react";
import UserBoard from "./Users";
import TrafficDashboard from "./TrafficDashboard";

Chart.register(CategoryScale, ...registerables);
const Home = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "june",
      "july",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Users",
        data: [75, 78, 79, 45, 30, 19, 45, 90, 70, 25, 15, 100],
        backgroundColor: "blue",
        borderColor: "white",
        borderWidth: 0.3,
        tension: 0.1,
      },
      {
        label: "New Users",
        data: [75, 78, 79, 45, 30, 19, 45, 90, 70, 25, 15, 100],
        backgroundColor: "rgb(1, 183, 255)",
        borderColor: "whitesm",
        borderWidth: 0.3,
        tension: 0.1,
      },
    ],
  };

  const data_2 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "dataset",
        data: [100, 94, 90, 70, 56, 55, 40],
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        label: "New Users",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "rgb(1, 183, 255)",
        borderColor: "white",
        borderWidth: 0.3,
        fill: true,
        tension: 0.1,
      },
    ],
  };
  const options = {
    scales: {
      x: {
        type: "category",
      },
      y: {
        type: "linear",
      },
    },
  };

  return (
    <div>
      <div className="home">Home</div>
      <div className="box1">
        <div className="container1">
          <div className="first">
            <h2>sale</h2>January - July 2023
            <p className="num">$613.200</p>
            <Line options={options} data={data_2} />
          </div>
          <div className="second">
            <div className="second1">
              <p>Customers</p>
              <p>44.725</p>
              <p className="flex">
                {"("}
                -12.5%
                <MoveDown />
                {")"}
              </p>
              <Users  className="shop"/>
            </div>
            <div className="second2">
              <p>Orders</p>
              <p>385</p>
              <p className="flex">
              {"("}
                17.2% 
                <MoveUp />
                {")"}
              </p>
              <ShoppingCart  className="shop"/>
            </div>
          </div>
        </div>
        <div className="container2">
          <h2>Trafic</h2>January 01, 2023 - December 31, 2023
          <div>
            <Bar options={options} data={data} />
          </div>
        </div>
      </div>
      <UserBoard/>
      <div className="bg-container">
        <h2>Traffic</h2>

        
    
      </div>
    </div>
  );
};

export default Home;
