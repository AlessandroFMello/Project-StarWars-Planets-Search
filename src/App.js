import React from 'react';
import './App.css';
import fetchAPI from './services/fetchAPI';

function App() {
  return (
    <>
      <span>Hello, App!</span>
      { fetchAPI() }
    </>
  );
}

export default App;
