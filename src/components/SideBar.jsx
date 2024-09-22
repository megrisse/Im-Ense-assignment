import React, { useState } from 'react';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

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
    <div className={`bg-white h-screen ${isExpanded ? 'w-64' : 'w-20'} transition-all duration-300 ease-in-out overflow-hidden`}>
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo.svg" alt="App Logo" className="w-9 h-9 mr-2" />
          {isExpanded && (
            <span className="text-xl font-semibold">
              <span className="text-[#1B8BCE]">APP</span>
              <span className="text-[#61AFDC]"> NAME</span>
            </span>
          )}
        </div>
        <button
          className="bg-white rounded-full p-1 shadow-md"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <img src="/icons/toggle.svg" alt="Toggle" className="w-5 h-5" />
        </button>
      </div>
      <nav className="mt-8">
        {menuItems.map((item, index) => (
          <div key={index} className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <img src={item.icon} alt={item.label} className="w-5 h-5" />
            {isExpanded && <span className="ml-4 font-roboto text-sm text-[#626262]">{item.label}</span>}
          </div>
        ))}
        <div className="mt-8 font-semibold px-4 py-2">
          {isExpanded && <span className="font-roboto text-sm text-[#626262]">MANAGE</span>}
        </div>
        {manageItems.map((item, index) => (
          <div key={index} className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <img src={item.icon} alt={item.label} className="w-5 h-5" />
            {isExpanded && <span className="ml-4 font-roboto text-sm text-[#626262]">{item.label}</span>}
          </div>
        ))}
      </nav>
      <div className="absolute bottom-4 left-4 right-4">
        {isExpanded && (
          <div className="text-xs">
            <p className="font-roboto font-bold text-sm text-[#939393]">@ App name 2021</p>
            <p className="font-roboto text-xs text-[#8A8A8A] leading-tight mt-2">
              Lorem ipsum dolor sit amet, consectetur <br></br> adipiscing elit, sed do eiusmod tempor <br></br> incididunt ut.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
