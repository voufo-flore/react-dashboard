import React from 'react';

const users = [
  { name: 'Yiorgos Avraamu', country: 'US', usage: 50, registered: 'Jan 10, 2023', lastLogin: '10 seconds ago', status: 'New' },
  { name: 'Avram Tarasios', country: 'BR', usage: 50, registered: 'Jan 10, 2023', lastLogin: '5 minutes ago', status: 'Recurring' },
  { name: 'Quintin Ed', country: 'IN', usage: 50, registered: 'Jan 10, 2023', lastLogin: '1 hour ago', status: 'New' },
  { name: 'Enéas Kwadwo', country: 'FR', usage: 50, registered: 'Jan 10, 2023', lastLogin: '1 week ago', status: 'New' },
  { name: 'Agapetus Tadeáš', country: 'ES', usage: 50, registered: 'Jan 10, 2023', lastLogin: '3 months ago', status: 'New' },
  { name: 'Friderik Dávid', country: 'PL', usage: 50, registered: 'Jan 10, 2023', lastLogin: '1 year ago', status: 'New' },
];

const countryFlags = {
  US: '🇺🇸', BR: '🇧🇷', IN: '🇮🇳', FR: '🇫🇷', ES: '🇪🇸', PL: '🇵🇱'
};

const UserTable = () => {
  return (
    <div style={{ padding: '1rem', backgroundColor: '#1f2937', color: 'white' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Users</h2>
          <p style={{ color: '#9ca3af' }}>1,232,150 registered users</p>
        </div>
        <button style={{ backgroundColor: '#3b82f6', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.25rem', border: 'none' }}>
          Add new user
        </button>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '0.5rem' }}>User</th>
            <th style={{ textAlign: 'left', padding: '0.5rem' }}>Country</th>
            <th style={{ textAlign: 'left', padding: '0.5rem' }}>Usage</th>
            <th style={{ textAlign: 'right', padding: '0.5rem' }}>Activity</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td style={{ padding: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: '#4b5563', marginRight: '0.75rem' }}></div>
                  <div>
                    <div>{user.name}</div>
                    <div style={{ fontSize: '0.875rem', color: '#9ca3af' }}>{user.status} | Registered: {user.registered}</div>
                  </div>
                </div>
              </td>
              <td style={{ padding: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ marginRight: '0.5rem' }}>{countryFlags[user.country]}</span>
                  {user.country}
                </div>
              </td>
              <td style={{ padding: '0.5rem' }}>
                <div style={{ width: '100%', backgroundColor: '#4b5563', borderRadius: '9999px', height: '0.5rem' }}>
                  <div style={{ width: `${user.usage}%`, backgroundColor: '#3b82f6', height: '100%', borderRadius: '9999px' }}></div>
                </div>
                <div style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}>Jun 11, 2023 - Jul 10, 2023</div>
              </td>
              <td style={{ padding: '0.5rem', textAlign: 'right' }}>
                Last login<br />
                <span style={{ fontWeight: 'bold' }}>{user.lastLogin}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;