import React from 'react';
import {  CategoryScale, LinearScale, Chart, ArcElement, PointElement, BarElement, LineElement } from 'chart.js';
// Register the required scale(s)
import { Line  } from 'react-chartjs-2';
Chart.register(CategoryScale, LinearScale, ArcElement, PointElement, BarElement, LineElement);

const LineChart = () => {
  // Dummy data for the line chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My Line Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  // Chart.js options for responsiveness
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        type:'category',
        ticks: {
          autoSkip: false,
          maxRotation: 45,
        },
      },
    },
  };

  return (
    <div className='chart-container' style={{ position: 'relative', width: '100%', height: '400px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
