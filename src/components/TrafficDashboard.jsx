import React from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';
import { User, Search, Facebook, Twitter, Linkedin } from 'lucide-react';

const TrafficDashboard = () => {
  const trafficData = [
    { label: 'New Clients', value: 9.123, color: '#7C3AED' },
    { label: 'Recurring Clients', value: 22.643, color: '#EC4899' },
    { label: 'Pageviews', value: 78.623, color: '#EAB308' },
    { label: 'Organic', value: 49.123, color: '#22C55E' },
  ];

  const dailyData = [
    { day: 'Monday', newClients: 20, recurringClients: 80, pageviews: 100 },
    { day: 'Tuesday', newClients: 30, recurringClients: 90, pageviews: 120 },
    { day: 'Wednesday', newClients: 10, recurringClients: 70, pageviews: 80 },
    { day: 'Thursday', newClients: 25, recurringClients: 85, pageviews: 110 },
    { day: 'Friday', newClients: 15, recurringClients: 75, pageviews: 90 },
    { day: 'Saturday', newClients: 35, recurringClients: 95, pageviews: 130 },
    { day: 'Sunday', newClients: 5, recurringClients: 65, pageviews: 70 },
  ];

  const genderData = [
    { gender: 'Male', percentage: 43, color: '#EAB308' },
    { gender: 'Female', percentage: 37, color: '#EAB308' },
  ];

  const sourceData = [
    { source: 'Organic Search', value: 191.235, percentage: 56, color: '#22C55E', icon: Search },
    { source: 'Facebook', value: 51.223, percentage: 15, color: '#22C55E', icon: Facebook },
    { source: 'Twitter', value: 37.564, percentage: 11, color: '#22C55E', icon: Twitter },
    { source: 'LinkedIn', value: 27.319, percentage: 8, color: '#22C55E', icon: Linkedin },
  ];

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-1">Traffic</h2>
      <p className="text-sm text-gray-400 mb-6">Last week</p>

      <div className="grid grid-cols-4 gap-4 mb-8">
        {trafficData.map(({ label, value, color }) => (
          <div key={label} className="flex items-center">
            <div className="w-1 h-10 mr-3" style={{ backgroundColor: color }}></div>
            <div>
              <p className="text-xs text-gray-400">{label}</p>
              <p className="text-xl font-semibold">{value.toLocaleString(undefined, { minimumFractionDigits: 3 })}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={dailyData} barSize={4} barGap={2}>
            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
            <Bar dataKey="newClients" fill="#7C3AED" radius={[2, 2, 0, 0]} />
            <Bar dataKey="recurringClients" fill="#EC4899" radius={[2, 2, 0, 0]} />
            <Bar dataKey="pageviews" fill="#4B5563" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div>
          {genderData.map(({ gender, percentage, color }) => (
            <div key={gender} className="mb-4">
              <div className="flex justify-between items-center mb-1 text-sm">
                <span className="flex items-center">
                  <User size={14} className="mr-2" />
                  {gender}
                </span>
                <span>{percentage}%</span>
              </div>
              <div className="bg-gray-700 h-2 rounded-full">
                <div
                  className="h-2 rounded-full"
                  style={{ width: `${percentage}%`, backgroundColor: color }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div>
          {sourceData.map(({ source, value, percentage, color, icon: Icon }) => (
            <div key={source} className="mb-4">
              <div className="flex justify-between items-center mb-1 text-sm">
                <span className="flex items-center">
                  <Icon size={14} className="mr-2" />
                  {source}
                </span>
                <span>{value.toLocaleString(undefined, { minimumFractionDigits: 3 })} ({percentage}%)</span>
              </div>
              <div className="bg-gray-700 h-2 rounded-full">
                <div
                  className="h-2 rounded-full"
                  style={{ width: `${percentage}%`, backgroundColor: color }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrafficDashboard;