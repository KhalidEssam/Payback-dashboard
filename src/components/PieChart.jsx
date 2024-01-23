import React from 'react';

import { CategoryScale, LinearScale, ArcElement , Chart , PointElement, BarElement, LineElement  } from 'chart.js';
import { Pie  } from 'react-chartjs-2';

// Register the required scale(s)
Chart.register(CategoryScale, LinearScale, ArcElement, PointElement, BarElement, LineElement);

const PieChart = () => {
  // Dummy data
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [300, 50, 100, 40, 120],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
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
    <div className='chart-container justify-content-center' style={{ position: 'relative', maxWidth: '100%', height: '400px' }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
