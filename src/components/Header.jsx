import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Header() {
  const {
    handleInput,
    handleSubmit,
    handleChange,
    numericFilter,
  } = useContext(PlanetsContext);
  return (
    <header className="header-component">
      <div className="header-initial-div">
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
      </div>
      <form onSubmit={ handleSubmit }>
        <select
          data-testid="column-filter"
          name="column"
          onChange={ handleChange }
        >
          <option value="population" selected>population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={ handleChange }
        >
          <option value="maior que" selected>maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          name="value"
          data-testid="value-filter"
          onChange={ handleChange }
          value={ numericFilter.value }
        />
        <button type="submit" data-testid="button-filter">Filtrar</button>
      </form>
    </header>
  );
}

export default Header;
