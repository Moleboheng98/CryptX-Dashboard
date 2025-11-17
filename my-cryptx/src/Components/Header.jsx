import React from 'react'
import { BellIcon } from '@heroicons/react/24/outline'  // ✅ updated import path

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      {/* Left side: filter + search */}
      <div className="flex items-center space-x-4">
        <select className="border border-gray-300 p-2 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <option>Select type of transaction</option>
        </select>
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 p-2 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Right side: notification + user avatar */}
      <div className="flex items-center space-x-4">
        <BellIcon className="h-5 w-5 text-gray-500 hover:text-indigo-600 transition duration-200" />
        <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
          U
        </div>
      </div>
    </div>
  )
}

export default Header
