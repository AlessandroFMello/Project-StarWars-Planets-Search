import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Header() {
  const { handleInput } = useContext(PlanetsContext);
  return (
    <header className="header-component">
      <h1>
        Project Star Wars - Trybe
      </h1>
      <label htmlFor="name-search">
        <input
          data-testid="name-filter"
          id="name-search"
          placeholder="Procurar por Nome"
          onChange={ handleInput }
          type="text"
        />
      </label>
    </header>
  );
}

export default Header;
