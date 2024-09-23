import React, { useState } from 'react';
import { Bell, UserPlus, UserMinus, BarChart2, UserCheck, AlertTriangle, Cpu, Memory, HardDrive } from 'lucide-react';

const BellDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [BellCount, setBellCount] = useState(5);

  const Bells = [
    { id: 1, icon: <UserPlus size={16} />, text: 'New user registered', color: 'text-green-400' },
    { id: 2, icon: <UserMinus size={16} />, text: 'User deleted', color: 'text-red-400' },
    { id: 3, icon: <BarChart2 size={16} />, text: 'Sales report is ready', color: 'text-blue-400' },
    { id: 4, icon: <UserCheck size={16} />, text: 'New client', color: 'text-green-400' },
    { id: 5, icon: <AlertTriangle size={16} />, text: 'Server overloaded', color: 'text-yellow-400' },
  ];

  const serverStatus = [
    { icon: <Cpu size={16} />, label: 'CPU USAGE', value: '358 processes, 1/4 cores' },
    { icon: <Memory size={16} />, label: 'MEMORY USAGE', value: '11444MB/16384MB' },
    { icon: <HardDrive size={16} />, label: 'SSD USAGE', value: '243GB/256GB' },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setBellCount(0);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
      >
        <Bell size={24} />
        {BellCount > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
            {BellCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-gray-800 rounded-md shadow-lg overflow-hidden z-20">
          <div className="py-2">
            <div className="px-4 py-2 text-sm text-gray-300 border-b border-gray-700">
              You have {Bells.length} Bells
            </div>
            {Bells.map((Bell) => (
              <a
                key={Bell.id}
                href="#"
                className="flex items-center px-4 py-3 hover:bg-gray-700 transition ease-in-out duration-150"
              >
                <div className={`flex-shrink-0 ${Bell.color}`}>{Bell.icon}</div>
                <div className="ml-3">
                  <p className="text-sm text-gray-300">{Bell.text}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="px-4 py-2 bg-gray-900">
            <p className="text-xs uppercase text-gray-500 border-b border-gray-700 pb-1 mb-2">Server</p>
            {serverStatus.map((status, index) => (
              <div key={index} className="flex items-center text-sm text-gray-300 py-1">
                <div className="mr-2">{status.icon}</div>
                <div>
                  <p className="text-xs text-gray-500">{status.label}</p>
                  <p>{status.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BellDropdown;