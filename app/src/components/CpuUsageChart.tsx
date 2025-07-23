import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const rechartsData = [
    { name: '10:00', usage: 25 },
    { name: '10:05', usage: 30 },
    { name: '10:10', usage: 20 },
    { name: '10:15', usage: 28 },
    { name: '10:20', usage: 35 },
    { name: '10:25', usage: 40 },
    { name: '10:30', usage: 32 },
];

const chartData = {
  labels: rechartsData.map(d => d.name),
  datasets: [
    {
      label: 'CPU Usage',
      data: rechartsData.map(d => d.usage),
      fill: false,
      borderColor: 'rgb(136, 132, 216)',
      tension: 0.1,
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
        text: 'CPU Usage Over Time',
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

const CpuUsageChart: React.FC = () => {
  return <Line options={options} data={chartData} />;
};

export default CpuUsageChart;