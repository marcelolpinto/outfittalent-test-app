import * as React from 'react';
import LaunchList from './components/LaunchList';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>List of SpaceX Launches</h1>
      <LaunchList />
    </div>
  );
};

export default App;