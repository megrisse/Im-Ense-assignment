import React from 'react';
import { Bell, Settings } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold">EHS vendor</h1>
          </div>
          <div className="flex items-center">
            <button className="p-2 rounded-full text-gray-400 hover:text-gray-500">
              <Bell size={20} />
            </button>
            <button className="p-2 rounded-full text-gray-400 hover:text-gray-500 ml-2">
              <Settings size={20} />
            </button>
            <div className="ml-3 relative">
              <div className="flex items-center">
                <img className="h-8 w-8 rounded-full" src="/path-to-user-image.jpg" alt="User" />
                <span className="ml-2 text-sm font-medium text-gray-700">Blaise Defloo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;