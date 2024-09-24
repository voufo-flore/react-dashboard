import React, { useState } from 'react';
import { Bell, Mail, CheckSquare, MessageSquare, User, Settings, CreditCard, Folder, Lock, LogOut } from 'lucide-react';

const menuItems = [
  { label: 'Updates', icon: Bell, count: 42 },
  { label: 'Messages', icon: Mail, count: 42 },
  { label: 'Tasks', icon: CheckSquare, count: 12 },
  { label: 'Comments', icon: MessageSquare, count: 12 },
  { label: 'Profile', icon: User },
  { label: 'Settings', icon: Settings },
  { label: 'Payments', icon: CreditCard, count: 42 },
  { label: 'Projects', icon: Folder, count: 42 },
  { label: 'Lock Account', icon: Lock },
  { label: 'Logout', icon: LogOut },
];

const AccountDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 focus:outline-none"
      >
        <img
          src="path/to/user-avatar.jpg"
          alt="User"
          className="w-8 h-8 rounded-full"
        />
        <span className="text-sm font-medium">Account</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-10">
          <div className="px-4 py-2 text-sm text-gray-700 font-semibold">Account</div>
          {menuItems.map((item, index) => (
            <React.Fragment key={item.label}>
              {index === 4 && <hr className="my-1" />}
              {index === 5 && <div className="px-4 py-2 text-sm text-gray-700 font-semibold">Settings</div>}
              <a
                href="#"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <item.icon className="w-4 h-4 mr-3" />
                <span>{item.label}</span>
                {item.count && (
                  <span className="ml-auto bg-green-500 text-white text-xs rounded-full px-2 py-1">
                    {item.count}
                  </span>
                )}
              </a>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default AccountDropdown;