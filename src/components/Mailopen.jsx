import React, { useState } from 'react';
import { Menu } from '@coreui/react';

const messages = [
  {
    id: 1,
    author: 'Jessica Williams',
    title: 'Urgent: System Maintenance Tonight',
    content: 'Attention team, we\'ll be conducting critical system maintenance tonight from 10 PM to 2 AM. Plan accordingly...',
    time: 'Just now',
    urgent: true
  },
  {
    id: 2,
    author: 'Richard Johnson',
    title: 'Project Update: Milestone Achieved',
    content: 'Kudos on hitting sales targets last quarter! Let\'s keep the momentum. New goals, new victories ahead...',
    time: '5 minutes ago',
    urgent: true
  },
  {
    id: 3,
    author: 'Angela Rodriguez',
    title: 'Social Media Campaign Launch',
    content: 'Exciting news! Our new social media campaign goes live tomorrow. Brace yourselves for engagement...',
    time: '1:52 PM'
  },
  {
    id: 4,
    author: 'Jane Lewis',
    title: 'Inventory Checkpoint',
    content: 'Team, it\'s time for our monthly inventory check. Accurate counts ensure smooth operations. Let\'s nail it...',
    time: '4:03 PM'
  },
  {
    id: 5,
    author: 'Ryan Miller',
    title: 'Customer Feedback Results',
    content: 'Our latest customer feedback is in. Let\'s analyze and discuss improvements for an even better service...',
    time: '3 days ago'
  }
];

const MessageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button 
        className="flex items-center text-white hover:text-gray-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Mail className="h-6 w-6" />
        <span className="ml-2">Messages</span>
      </Menu.Button>

      {isOpen && (
        <Menu.Items className="absolute right-0 w-96 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-4 py-3">
            <p className="text-sm font-medium text-gray-900">You have {messages.length} messages</p>
          </div>
          {messages.map((message) => (
            <Menu.Item key={message.id}>
              {({ active }) => (
                <div className={`${active ? 'bg-gray-100' : ''} px-4 py-3`}>
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-medium text-gray-900">{message.author}</p>
                    <p className="text-xs text-gray-500">{message.time}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900 mt-1">
                    {message.urgent && <span className="text-red-500 mr-1">!</span>}
                    {message.title}
                  </p>
                  <p className="text-sm text-gray-500 mt-1 truncate">{message.content}</p>
                </div>
              )}
            </Menu.Item>
          ))}
          <Menu.Item>
            <button className="w-full px-4 py-2 text-sm text-center text-blue-600 hover:bg-blue-50">
              View all messages
            </button>
          </Menu.Item>
        </Menu.Items>
      )}
    </Menu>
  );
};

export default MessageDropdown;