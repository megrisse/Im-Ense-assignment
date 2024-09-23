import React, { useEffect, useState } from 'react';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsExpanded(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    { icon: '/icons/Home.svg', label: 'Tableau de bord' },
    { icon: '/icons/Eye.svg', label: 'Observations' },
    { icon: '/icons/ToolBoxMeet.svg', label: 'ToolBox Meetings' },
    { icon: '/icons/LMRA.svg', label: 'LMRA' },
    { icon: '/icons/competence.svg', label: 'Compétence' },
    { icon: '/icons/Gestion.svg', label: 'Gestion des échafaudages' },
    { icon: '/icons/Planner.svg', label: 'Journey Planner' },
    { icon: '/icons/SafetyDoc.svg', label: 'Safety Documents' },
    { icon: '/icons/ptw.svg', label: 'PTW' },
  ];

  const manageItems = [
    { icon: '/icons/user.svg', label: 'Utilisateurs & Départements' },
    { icon: '/icons/Settings.svg', label: 'PTW Settings' },
    { icon: '/icons/Settings.svg', label: 'Roles & Permissions' },
    { icon: '/icons/Clients.svg', label: 'Clients, Sites & Projects' },
    { icon: '/icons/info.svg', label: 'Informations' },
    { icon: '/icons/report.svg', label: 'Rapports' },
    { icon: '/icons/scaffolding.svg', label: `Paramètres d'échafaudage` },
    { icon: '/icons/params.svg', label: 'Paramètres de compétence' },
  ];

  return (
    <div className={`bg-white dark:bg-gray-800 h-screen ${isExpanded ? 'w-64' : 'w-20'} transition-all duration-300 ease-in-out overflow-auto`}>
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo.svg" alt="App Logo" className="w-9 h-9 mr-2" />
          {isExpanded && (
            <span className="text-xl font-semibold text-gray-700 dark:text-white">
              <span className="text-[#1B8BCE]">APP</span>
              <span className="text-[#61AFDC]"> NAME</span>
            </span>
          )}
        </div>
        <button className="pl-2.5" onClick={() => setIsExpanded(!isExpanded)}>
          <img src="/icons/toggle.svg" alt="Toggle" className="w-5 h-5" />
        </button>
      </div>
      <nav className={`mt-8 ${!isExpanded ? 'gap-y-4' : ''} flex flex-col`}>
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center ${isExpanded ? 'px-4 py-2' : 'justify-center'} hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer`}
          >
            <img
              src={item.icon}
              alt={item.label}
              className={`${isExpanded ? 'w-5 h-5' : 'w-6 h-6'} transition-all duration-300`}
            />
            {isExpanded && <span className="ml-4 font-roboto text-sm text-gray-700 dark:text-gray-200">{item.label}</span>}
          </div>
        ))}
        <div className="mt-8 font-semibold px-4 py-2">
          {isExpanded && <span className="font-roboto text-sm text-gray-700 dark:text-gray-200">MANAGE</span>}
        </div>
        {manageItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center ${isExpanded ? 'px-4 py-2' : 'justify-center'} hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer`}
          >
            <img
              src={item.icon}
              alt={item.label}
              className={`${isExpanded ? 'w-5 h-5' : 'w-6 h-6'} transition-all duration-300`}
            />
            {isExpanded && <span className="ml-4 font-roboto text-sm text-gray-700 dark:text-gray-200">{item.label}</span>}
          </div>
        ))}
      </nav>
      <div className="absolute bottom-4 left-4 right-4 hidden sm:block overflow-x-auto overflow-y-hidden">
        {isExpanded && (
          <div className="text-xs">
            <p className="font-roboto font-bold text-sm text-gray-500 dark:text-gray-400">@ App name 2021</p>
            <p className="font-roboto text-xs text-gray-400 dark:text-gray-500 leading-tight mt-2">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
