import React from 'react';
import Sidebar from './components/SideBar';
import Navbar from './components/NavBar';
import EHSVendorForm from './components/EHSVendorForm';

const App = () => {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 sm:p-6 lg:p-8">
          <EHSVendorForm />
        </main>
      </div>
    </div>
  );
};

export default App;
