import React from 'react'
import { ArrowDownTrayIcon, ArrowUpRightIcon } from '@heroicons/react/24/solid'

const transactions = [
  { label: 'Ethereum', type: 'Received', amount: '$24,102', time: 'Today, 19:30' },
  { label: 'Bitcoin', type: 'Buy', amount: '$4,157', time: 'Today, 14:32' },
  { label: 'Bitcoin', type: 'Buy', amount: '$64,784', time: 'Today, 13:50' },
  { label: 'Litecoin', type: 'Buy', amount: '$14,265', time: 'Today, 09:38' },
]

const Transactions = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
    <ul className="divide-y divide-gray-200">
      {transactions.map(({ label, type, amount, time }, index) => {
        const Icon = type === 'Received' ? ArrowDownTrayIcon : ArrowUpRightIcon
        return (
          <li key={index} className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center gap-2">
              <Icon className="h-4 w-4 text-indigo-600" />
              <span className="font-medium">{label}</span>
              <span className="text-xs text-gray-500">{type}</span>
            </div>
            <div className="text-right">
              <p className="text-gray-700">{amount}</p>
              <p className="text-xs text-gray-500">{time}</p>
            </div>
          </li>
        )
      })}
    </ul>
  </div>
)

export default Transactions
