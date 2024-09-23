import React, { useState } from 'react';
import { ChevronDown, ChevronUp, LogOut, Cog, ShieldCheck } from 'lucide-react';

const DropdownMenu = ({ userName, userEmail }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const menuItems = [
    {
      icon: <Cog size={16} />,
      label: 'Profile settings',
      href: '#',
    },
    {
      icon: <ShieldCheck size={16} />,
      label: 'Our policies',
      href: '#',
    },
    {
      icon: <LogOut size={16} />,
      label: 'Log out',
      href: '#',
    },
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="ml-3 relative">
      <div className="flex items-center cursor-pointer">
        <img className="h-8 w-8 rounded-full" src="/blaise.png" alt="User" />
        <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-200">{userName}</span>
        <button className="ml-2 p-1 text-gray-500 hover:text-gray-700 dark:text-gray-200 dark:hover:text-white" onClick={toggleDropdown}>
          {dropdownOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 shadow-lg rounded-md py-2 z-10">
          <div className="px-4 py-2 text-sm text-gray-900 dark:text-gray-200 font-medium">
            {userName}
            <p className="text-xs text-gray-500 dark:text-gray-400">{userEmail}</p>
          </div>
          <hr className="dark:border-gray-600" />
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center"
            >
              {item.icon}
              <span className="ml-2">{item.label}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
