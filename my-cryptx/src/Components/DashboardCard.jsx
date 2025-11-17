import React from 'react'
import { ArrowTrendingUpIcon } from '@heroicons/react/24/solid'


const cards = [
  { label: 'Bitcoin', amount: '$40,291', change: '+3.2%', color: 'bg-green-100 text-green-700' },
  { label: 'Ethereum', amount: '$18,291', change: '+2.1%', color: 'bg-blue-100 text-blue-700' },
  { label: 'Litecoin', amount: '$3,291', change: '+1.2%', color: 'bg-yellow-100 text-yellow-700' },
  { label: 'Ripple', amount: '$3,291', change: '+1.2%', color: 'bg-purple-100 text-purple-700' },
]

const DashboardCards = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
      {cards.map(({ label, amount, change, color }) => (
        <div
          key={label}
          className={`p-4 rounded-lg shadow-sm ${color} transition-transform duration-200 hover:scale-105 hover:shadow-md`}
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-semibold">{label}</h3>
            <ArrowTrendingUpIcon className="h-5 w-5 text-gray-600" />
          </div>
          <p className="text-xl font-bold">{amount}</p>
          <span className="text-xs text-gray-600">{change}</span>
        </div>
      ))}
    </div>
  )
}

export default DashboardCards

