import './App.css'
import SideBar from './Components/SideBar'
import Header from './Components/Header'
import DashboardCard from './Components/DashboardCard'
import LiveMarket from './Components/LiveMarket'
import BTCChart from './Components/BTCChart'
import Transactions from './Components/Transactions'

function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        <div className="p-6 space-y-6">
          {/* Header */}
          <Header />

          {/* Dashboard Cards */}
          <DashboardCard />

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column: BTC Chart + Live Market */}
            <div className="lg:col-span-2 space-y-6">
              <BTCChart />
              <LiveMarket />
            </div>

            {/* Right Column: Transactions */}
            <div className="space-y-6">
              <Transactions />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
