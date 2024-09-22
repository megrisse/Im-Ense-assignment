import React, { useState } from "react";
import { Upload } from "lucide-react";

const EHSVendorForm = () => {
  const [activeSection, setActiveSection] = useState(4);

  const sections = [
    { id: 1, title: "General information" },
    { id: 2, title: "Accident statistics – Data for the last three years(1)" },
    {
      id: 3,
      title: "Contact details of your preventionist / HSE contact person",
    },
    { id: 4, title: "General information about your company" },
  ];

  const toggleSection = (id) => {
    setActiveSection(activeSection === id ? null : id);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center p-8">
      <div className="w-4/5 lg:w-7/12 p-6">
        <div className="flex justify-end space-x-4 mb-6">
          <button className="px-4 py-2 bg-green-500 text-white rounded">
            Save
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            Next
          </button>
        </div>
        {sections.map((section) => (
          <div key={section.id} className="mb-6">
            <div
              className={`w-full text-left flex justify-between font-roboto text-[13px] items-center ${
                activeSection === section.id
                  ? "bg-[#42A4DF] text-white"
                  : "bg-[#D8D8D8] text-gray-700"
              }`}
              style={{ position: "relative", minHeight: "60px" }} // Adjusted minHeight for a uniform size
            >
              <span
                className={`${
                  activeSection === section.id
                    ? " border border-[#42A4DF]"
                    : "border border-gray-200"
                } text-black p-4 bg-white flex items-center justify-center`}
                style={{
                  height: "100%",
                  position: "absolute",
                  left: 0,
                  top: 0,
                  minWidth: "50px",
                }}
              >
                {section.id}.
              </span>
              <div className="pl-16 w-full flex items-center">
                <span>{section.title}</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer pr-4">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={activeSection === section.id}
                  onChange={() => toggleSection(section.id)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-500"></div>
                <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-full"></div>
              </label>
            </div>
            {activeSection === section.id && section.id === 4 && (
              <div className="bg-white p-6 space-y-6">
                <div>
                  <label className="block mb-2 text-[12px] font-medium font-roboto">
                    What are the main activities of your company?
                  </label>
                  <input
                    type="text"
                    className="w-full border-b border-gray-300 font-roboto text-[11px] focus:border-blue-500 outline-none placeholder-italic placeholder-roboto"
                    placeholder="Answer here"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-[12px] font-medium font-roboto">
                    What is the year of creation of your company?
                  </label>
                  <input
                    type="text"
                    className="w-full border-b border-gray-300 font-roboto text-[11px] focus:border-blue-500 outline-none placeholder-italic placeholder-roboto"
                    placeholder="Answer here"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-[12px] font-medium font-roboto">
                    What is the number of years of expertise in this field?
                  </label>
                  <input
                    type="text"
                    className="w-full border-b border-gray-300 font-roboto text-[11px] focus:border-blue-500 outline-none placeholder-italic placeholder-roboto"
                    placeholder="Answer here"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-[12px] font-medium font-roboto">
                    Who are the Administrators / Directors / Managers?
                  </label>
                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <label className="block mb-2 text-[12px] font-roboto">
                        Administrator Name
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded p-2 font-roboto text-[11px] focus:border-blue-500 outline-none placeholder-italic placeholder-roboto"
                        placeholder="Enter Administrator Name"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block mb-2 text-[12px] font-roboto">
                        Director Name
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded p-2 font-roboto text-[11px] focus:border-blue-500 outline-none placeholder-italic placeholder-roboto"
                        placeholder="Enter Director Name"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block mb-2 text-[12px] font-roboto">
                        Manager Name
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded p-2 font-roboto text-[11px] focus:border-blue-500 outline-none placeholder-italic placeholder-roboto"
                        placeholder="Enter Manager Name"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-[12px] font-medium font-roboto">
                    Do you have an internal organization chart showing the
                    hierarchical link in HSE matters?
                  </label>
                  <div className="flex flex-col space-y-2 mb-2">
                    <label className="flex items-center text-[#787878] font-roboto text-[12px]">
                      <input type="radio" name="orgChart" className="mr-2" />
                      <span>Yes</span>
                    </label>
                    <label className="flex items-center text-[#787878] font-roboto text-[12px]">
                      <input type="radio" name="orgChart" className="mr-2" />
                      <span>No</span>
                    </label>
                  </div>
                  <textarea
                    className="w-full border rounded p-2 font-roboto text-[11px] focus:border-blue-500 outline-none placeholder-italic placeholder-roboto"
                    placeholder="Add a comment..."
                    rows="3"
                  ></textarea>
                  <button className="mt-2 flex items-center text-green-500">
                    <Upload size={16} className="mr-1" />
                    Please upload documentation
                  </button>
                </div>
                <div>
                  <label className="block mb-2 text-[12px] font-medium font-roboto">
                    Do you have specific HSE organization charts for your sites
                    and your customers?
                  </label>
                  <div className="flex flex-col space-y-2 mb-2">
                    <label className="flex items-center text-[#787878] font-roboto text-[12px]">
                      <input type="radio" name="siteCharts" className="mr-2" />
                      <span>Yes</span>
                    </label>
                    <label className="flex items-center text-[#787878] font-roboto text-[12px]">
                      <input type="radio" name="siteCharts" className="mr-2" />
                      <span>No</span>
                    </label>
                  </div>
                  <textarea
                    className="w-full border rounded p-2 font-roboto text-[11px] focus:border-blue-500 outline-none placeholder-italic placeholder-roboto"
                    placeholder="Add a comment..."
                    rows="3"
                  ></textarea>
                  <button className="mt-2 flex items-center text-green-500">
                    <Upload size={16} className="mr-1" />
                    Please upload documentation
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EHSVendorForm;
