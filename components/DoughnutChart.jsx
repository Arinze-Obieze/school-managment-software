import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: ["Female", "Male"],
    datasets: [
      {
        label: "$$",
        data: [12, 19],
        backgroundColor: ["#EF4444", "#3B82F6"],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    aspectRatio: 1,
    cutout: "50%",
    animation: {
      animateRotate: false,
    },
  };

  return (
    <div className="w-56 h-64">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
