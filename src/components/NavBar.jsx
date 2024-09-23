import React, { useEffect, useState } from "react";
import { Bell, Settings, Moon, Sun } from "lucide-react";
import DropdownMenu from "./DropDownMenu";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
      <div className="flex items-center">
        <h1 className="text-lg sm:text-xl font-medium font-roboto dark:text-white">
          EHS Vendor
        </h1>
      </div>
      <div className="flex items-center space-x-2 sm:space-x-4">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full text-gray-400 hover:text-gray-500 dark:text-gray-200 dark:hover:text-white"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button className="p-2 rounded-full text-gray-400 hover:text-gray-500 dark:text-gray-200 dark:hover:text-white">
          <Bell size={20} />
        </button>

        <button className="p-2 rounded-full text-gray-400 hover:text-gray-500 dark:text-gray-200 dark:hover:text-white">
          <Settings size={20} />
        </button>

        <DropdownMenu
          userName="Blaise Defloo"
          userEmail="besix.group@besix.be"
        />
      </div>
    </nav>
  );
};

export default Navbar;
