import React from 'react';
import { topography } from './Topography';

const App = () => {
  return (
    <div>
      <h1>Topography Information</h1>
      
      <section>
        <h2>Elevation</h2>
        <p>Minimum Elevation: {topography.elevation.min} m</p>
        <p>Maximum Elevation: {topography.elevation.max} m</p>
      </section>

      <section>
        <h2>Terrain Types</h2>
        <ul>
          {topography.terrainTypes.map((terrain, index) => (
            <li key={index}>
              <strong>{terrain.name}</strong> - Slope: {terrain.slope}, Area: {terrain.area}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Geographical Features</h2>
        
        <h3>Rivers</h3>
        <ul>
          {topography.features.rivers.map((river, index) => (
            <li key={index}>
              <strong>{river.name}</strong> - Length: {river.length} km, Flow: {river.flow}
            </li>
          ))}
        </ul>

        <h3>Lakes</h3>
        <ul>
          {topography.features.lakes.map((lake, index) => (
            <li key={index}>
              <strong>{lake.name}</strong> - Area: {lake.area} km², Depth: {lake.depth} m
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default App;