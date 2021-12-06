import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsContextProvider';
import Table from './components/Table';

function App() {
  return (
    <PlanetsProvider>
      <Table />
    </PlanetsProvider>
  );
}

export default App;
