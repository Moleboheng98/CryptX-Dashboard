import React from 'react';
import {
  HomeIcon,
  ChartBarIcon,
  CreditCardIcon,
  CashIcon,
  CogIcon,
  LogoutIcon,
} from '@heroicons/react/outline';

const navItems = [
  { label: 'Home', icon: HomeIcon },
  { label: 'Dashboard', icon: ChartBarIcon },
  { label: 'Transactions', icon: CreditCardIcon },
  { label: 'Wallet', icon: CashIcon },
  { label: 'Analytics', icon: ChartBarIcon },
  { label: 'Settings', icon: CogIcon },
  { label: 'Logout', icon: LogoutIcon },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md p-6 h-screen">
      <h2 className="text-2xl font-bold text-indigo-600 mb-8">CrypTX</h2>
      <nav className="space-y-4">
        {navItems.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="flex items-center space-x-3 text-gray-700 hover:text-indigo-600 cursor-pointer transition duration-200 ease-in-out"
          >
            <Icon className="h-5 w-5" />
            <span className="text-sm font-medium">{label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;





