// PieChart.js
'use client'

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ dataPoints }) => {
  // Transform y to value if needed
  const pieData = Array.isArray(dataPoints) 
    ? dataPoints.map(item => ({ 
        label: item.label, 
        value: item.y || item.value 
      }))
    : [];

  const data = {
    labels: pieData.map(item => item.label),
    datasets: [{
      data: pieData.map(item => item.value),
      backgroundColor: [
        '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
        '#FF9F40', '#7FFFD4', '#FF6B6B', '#4ECDC4', '#45B7D1'
      ],
      borderWidth: 1,
    }]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      tooltip: {
        callbacks: {
          label: (ctx) => `${ctx.label}: ${ctx.raw} (${((ctx.raw / ctx.dataset.data.reduce((a, b) => a + b, 0)) * 100).toFixed(1)}%)`
        }
      }
    }
  };

  if (pieData.length === 0) {
    return <p className="text-gray-400 p-4">No data available.</p>;
  }

  return <Pie data={data} options={options} />;
};

export default PieChart;
