import React, { useState } from 'react';
import { CCard, CCardContent } from '@coreui/react';

const NotificationBell = () => {
  const [isOpen, setIsOpen] = useState(false);

  const notifications = [
    { icon: '👤', text: 'New user registered' },
    { icon: '🗑️', text: 'User deleted' },
    { icon: '📊', text: 'Sales report is ready' },
    { icon: '🏢', text: 'New client' },
    { icon: '⚠️', text: 'Server overloaded' },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="p-2 rounded-full hover:bg-gray-200 focus:outline-none"
      >
        <Bell className="h-6 w-6" />
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
          5
        </span>
      </button>

      {isOpen && (
        <CCard className="absolute right-0 mt-2 w-72 shadow-lg">
          <CCardContent className="p-0">
            <div className="p-2 bg-gray-100 text-sm font-semibold">
              You have 5 notifications
            </div>
            <ul className="divide-y divide-gray-200">
              {notifications.map((notification, index) => (
                <li key={index} className="p-3 hover:bg-gray-50">
                  <div className="flex items-center">
                    <span className="mr-2">{notification.icon}</span>
                    <span>{notification.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </CCardContent>
        </CCard>
      )}
    </div>
  );
};

export default NotificationBell;

