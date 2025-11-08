import React from 'react';
import Sidebar from './Components/sidebar';
import Header from './Components/header';
import DashboardCards from './Components/dashboardcard';
import BTCChart from './Components/BTCChart';
import LiveMarket from './Components/LiveMarket';
import Transactions from './Components/Transactions';

function App() {
  return (
    <div className="flex h-screen bg-gray-50 text-gray-800 font-sans">
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto">
        <Header />
        <h1 className="text-2xl font-bold mb-6">Overview</h1>
        <DashboardCards />
        <BTCChart />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <LiveMarket />
          <Transactions />
        </div>
      </main>
    </div>
  );
}

export default App;



