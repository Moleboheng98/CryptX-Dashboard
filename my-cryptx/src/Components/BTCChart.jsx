import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend)

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
  datasets: [
    {
      label: 'BTC Price',
      data: [32000, 34000, 36000, 38000, 25240, 29000, 31000, 33000, 35000, 37000, 40291],
      borderColor: '#6366f1',
      backgroundColor: 'rgba(99,102,241,0.1)',
      tension: 0.4,
      fill: true,
      pointRadius: 3,
    },
  ],
}

const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
  },
  scales: {
    y: { beginAtZero: false },
  },
}

const BTCChart = () => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
    <h3 className="text-lg font-semibold mb-4">BTC Prices</h3>
    <Line data={data} options={options} />
  </div>
)

export default BTCChart
