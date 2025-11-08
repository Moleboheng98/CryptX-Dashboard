import React from 'react';

const transactions = [
  { label: 'Ethereum', amount: '$4,291' },
  { label: 'Bitcoin', amount: '$3,291' },
  { label: 'Ethereum', amount: '$2,291' },
  { label: 'Bitcoin', amount: '$1,291' },
  { label: 'Ethereum', amount: '$3,291' },
];

const Transactions = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
      <ul className="divide-y divide-gray-200">
        {transactions.map(({ label, amount }, index) => (
          <li
            key={index}
            className="grid grid-cols-2 py-2 text-sm hover:bg-gray-50 transition duration-200 ease-in-out"
          >
            <span>{label}</span>
            <span className="text-gray-700">{amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;





