import React from 'react';

const coins = [
  { name: 'Bitcoin', price: '$40,291', change: '+0.21%' },
  { name: 'Ethereum', price: '$18,291', change: '+0.91%' },
  { name: 'Litecoin', price: '$3,291', change: '+1.2%' },
  { name: 'Cardano', price: '$3,291', change: '+0.51%' },
  { name: 'Ripple', price: '$3,291', change: '+1.2%' },
];

const LiveMarket = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Live Market</h3>
      <ul className="divide-y divide-gray-200">
        {coins.map(({ name, price, change }) => (
          <li
            key={name}
            className="grid grid-cols-3 py-2 text-sm hover:bg-gray-50 transition duration-200 ease-in-out"
          >
            <span className="font-medium">{name}</span>
            <span>{price}</span>
            <span className="text-green-600">{change}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LiveMarket;





