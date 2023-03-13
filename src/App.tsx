// Global
import React from 'react';

// Styles
import './App.scss';
import './vars/vars.scss';

// Components
import Lines from './components/Lines/Lines';
import Circle from './components/Circle/Circle';

function App() {
  return (
    <div className="App">
      <Lines />
      <div className="container">
        <div className="head-container">
          <div className="line-title"></div>
          <h1 className="container-title">Исторические даты</h1>
        </div>
        <Circle startYear={2000} endYear={2010} />
      </div>
    </div>
  );
}

export default App;

