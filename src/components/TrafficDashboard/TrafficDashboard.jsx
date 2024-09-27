import React from 'react';
import './TrafficDashboard.css';

const TrafficDashboard = () => {
  return (
    <div className="dashboard">
      <h1>Traffic</h1>
      <p>Last week</p>
      
      <div className="stats">
        <div className="stat-item">
          <h3>New Clients</h3>
          <p>9,123</p>
        </div>
        <div className="stat-item">
          <h3>Recurring Clients</h3>
          <p>22,643</p>
        </div>
        <div className="stat-item">
          <h3>Pageviews</h3>
          <p>78,623</p>
        </div>
        <div className="stat-item">
          <h3>Organic</h3>
          <p>49,123</p>
        </div>
      </div>
      
      <div className="chart">
        <div className="day-stats">
          <p>Monday</p>
          <div className="bar-container">
            <div className="bar new" style={{width: '20%'}}></div>
            <div className="bar recurring" style={{width: '60%'}}></div>
          </div>
        </div>
        <div className="day-stats">
          <p>Tuesday</p>
          <div className="bar-container">
            <div className="bar new" style={{width: '30%'}}></div>
            <div className="bar recurring" style={{width: '70%'}}></div>
          </div>
        </div>
        <div className="day-stats">
          <p>Wednesday</p>
          <div className="bar-container">
            <div className="bar new" style={{width: '10%'}}></div>
            <div className="bar recurring" style={{width: '50%'}}></div>
          </div>
        </div>
        <div className="day-stats">
          <p>Thursday</p>
          <div className="bar-container">
            <div className="bar new" style={{width: '25%'}}></div>
            <div className="bar recurring" style={{width: '55%'}}></div>
          </div>
        </div>
        <div className="day-stats">
          <p>Friday</p>
          <div className="bar-container">
            <div className="bar new" style={{width: '15%'}}></div>
            <div className="bar recurring" style={{width: '45%'}}></div>
          </div>
        </div>
        <div className="day-stats">
          <p>Saturday</p>
          <div className="bar-container">
            <div className="bar new" style={{width: '20%'}}></div>
            <div className="bar recurring" style={{width: '60%'}}></div>
          </div>
        </div>
        <div className="day-stats">
          <p>Sunday</p>
          <div className="bar-container">
            <div className="bar new" style={{width: '10%'}}></div>
            <div className="bar recurring" style={{width: '50%'}}></div>
          </div>
        </div>
      </div>
      
      <div className="demographics">
        <div className="demo-item">
          <span className="icon" >👤 Male</span>
          <div className="bar-container">
            <div className="bar new" style={{width: '80%', color:'yellow'}}></div>
          </div>
        </div>
        <div className="demo-item">
          <span className="icon">👤Female</span>
        <div className="bar-container">
            <div className="bar new" style={{width: '80%', color:'yellow'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrafficDashboard;