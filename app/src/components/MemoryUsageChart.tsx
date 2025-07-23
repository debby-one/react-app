
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const chartData = {
  labels: ['Total', 'Used', 'Free'],
  datasets: [
    {
      label: 'Memory Usage',
      data: [16, 8, 8],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(75, 192, 192, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Memory Usage',
    },
  },
  scales: {
    x: {
      ticks: {
        color: '#888',
      },
      grid: {
        color: '#444',
      }
    },
    y: {
      ticks: {
        color: '#888',
      },
      grid: {
        color: '#444',
      }
    }
  }
};

const MemoryUsageChart: React.FC = () => {
  return <Bar options={options} data={chartData} />;
};

export default MemoryUsageChart;
