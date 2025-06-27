// components/ParetoChart.jsx

'use client'
import React from "react";
import { Stack } from "@mui/material";
import CanvasJSReact from '@canvasjs/react-charts';

const ParetoChart = ({ title, dataPoints}) => {

  if (!Array.isArray(dataPoints) || dataPoints.length === 0) {
    return <p className=" text-gray-400">No data available for chart.</p>;
  }

  const getCumulativeLine = (points) => {
    if (!Array.isArray(points)) return [];


    let total = points.reduce((acc, p) => acc + p.y, 0);
    let sum = 0;
    return points.map((p) => {
      sum += p.y;
      return { label: p.label, y: (sum / total) * 100 };
    });
  };

  const options = {
    animationEnabled: true,
    title: { text: title },
    axisY: { title: "Frequency" },
    axisY2: {
      title: "Cumulative %",
      maximum: 100,
    },
    data: [
      {
        type: "column",
        dataPoints: dataPoints,
      },
      {
        type: "line",
        axisYType: "secondary",
        dataPoints: getCumulativeLine(dataPoints),
      },
    ],
  };

  return(
   <CanvasJSReact.CanvasJSChart options={options} />
  )
  
};

export default ParetoChart;