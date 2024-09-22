import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Upload } from 'lucide-react';

const EHSVendorForm = () => {
  const [activeSection, setActiveSection] = useState(4);

  const sections = [
    { id: 1, title: 'General information' },
    { id: 2, title: 'Accident statistics – Data for the last three years(!)' },
    { id: 3, title: 'Contact details of your preventionist / HSE contact person' },
    { id: 4, title: 'General information about your company' },
  ];

  const toggleSection = (id) => {
    setActiveSection(activeSection === id ? null : id);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h2 className="text-2xl font-semibold mb-6">Pre-assessment</h2>
      {sections.map((section) => (
        <div key={section.id} className="mb-4">
          <button
            className={`w-full text-left p-4 flex justify-between items-center ${
              activeSection === section.id ? 'bg-blue-500 text-white' : 'bg-white'
            }`}
            onClick={() => toggleSection(section.id)}
          >
            <span>{`${section.id}. ${section.title}`}</span>
            {activeSection === section.id ? <ChevronUp /> : <ChevronDown />}
          </button>
          {activeSection === section.id && section.id === 4 && (
            <div className="bg-white p-6 space-y-6">
              <div>
                <label className="block mb-2">What are the main activities of your company?</label>
                <input type="text" className="w-full border-b border-gray-300 focus:border-blue-500 outline-none" placeholder="Answer here" />
              </div>
              <div>
                <label className="block mb-2">What is the year of creation of your company?</label>
                <input type="text" className="w-full border-b border-gray-300 focus:border-blue-500 outline-none" placeholder="Answer here" />
              </div>
              <div>
                <label className="block mb-2">What is the number of years of expertise in this field?</label>
                <input type="text" className="w-full border-b border-gray-300 focus:border-blue-500 outline-none" placeholder="Answer here" />
              </div>
              <div>
                <label className="block mb-2">Who are the Administrators / Directors / Managers?</label>
                <div className="flex space-x-4">
                  <input type="text" className="flex-1 border rounded p-2" placeholder="Enter Administrator Name" />
                  <input type="text" className="flex-1 border rounded p-2" placeholder="Enter Director Name" />
                  <input type="text" className="flex-1 border rounded p-2" placeholder="Enter Manager Name" />
                </div>
              </div>
              <div>
                <label className="block mb-2">Do you have an internal organization chart showing the hierarchical link in HSE matters?</label>
                <div className="flex items-center space-x-4 mb-2">
                  <label className="flex items-center">
                    <input type="radio" name="orgChart" className="mr-2" />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="orgChart" className="mr-2" />
                    <span>No</span>
                  </label>
                </div>
                <textarea className="w-full border rounded p-2" placeholder="Add a comment..." rows="3"></textarea>
                <button className="mt-2 flex items-center text-green-500">
                  <Upload size={16} className="mr-1" />
                  Please upload documentation
                </button>
              </div>
              <div>
                <label className="block mb-2">Do you have specific HSE organization charts for your sites and your customers?</label>
                <div className="flex items-center space-x-4 mb-2">
                  <label className="flex items-center">
                    <input type="radio" name="siteCharts" className="mr-2" />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="siteCharts" className="mr-2" />
                    <span>No</span>
                  </label>
                </div>
                <textarea className="w-full border rounded p-2" placeholder="Add a comment..." rows="3"></textarea>
                <button className="mt-2 flex items-center text-green-500">
                  <Upload size={16} className="mr-1" />
                  Please upload documentation
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
      <div className="flex justify-end space-x-4 mt-6">
        <button className="px-4 py-2 bg-green-500 text-white rounded">Save</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Next</button>
      </div>
    </div>
  );
};

export default EHSVendorForm;