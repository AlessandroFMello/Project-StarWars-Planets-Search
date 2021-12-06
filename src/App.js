import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsContextProvider';
import MainPage from './pages/MainPage';

function App() {
  return (
    <PlanetsProvider>
      <MainPage />
    </PlanetsProvider>
  );
}

export default App;
