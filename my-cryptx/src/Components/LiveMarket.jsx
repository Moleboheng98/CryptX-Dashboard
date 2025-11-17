import React from 'react'
import { ArrowTrendingUpIcon, ArrowTrendingDownIcon } from '@heroicons/react/24/solid'

const coins = [
  { name: 'Ethereum', price: '39,786 USD', change: '+14.02%' },
  { name: 'Bitcoin', price: '21,786 USD', change: '+4.02%' },
  { name: 'Litecoin', price: '9,786 USD', change: '-4.02%' },
  { name: 'Cardano', price: '4,786 USD', change: '+0.02%' },
]

const LiveMarket = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold mb-4">Live Market</h3>
    <ul className="divide-y divide-gray-200">
      {coins.map(({ name, price, change }) => {
        const isPositive = change.startsWith('+')
        const Icon = isPositive ? ArrowTrendingUpIcon : ArrowTrendingDownIcon
        const color = isPositive ? 'text-green-600' : 'text-red-600'

        return (
          <li key={name} className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center gap-2">
              <Icon className={`h-4 w-4 ${color}`} />
              <span className="font-medium">{name}</span>
            </div>
            <div className="text-right">
              <p className="text-gray-700">{price}</p>
              <p className={`text-xs ${color}`}>{change}</p>
            </div>
          </li>
        )
      })}
    </ul>
  </div>
)

export default LiveMarket

