import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Header() {
  const {
    handleInput,
    handleSubmit,
    handleChange,
    numericFilter,
    columnFilter,
    comparisonFilter,
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
          value={ numericFilter.column }
        >
          {
            columnFilter.map((column) => (
              <option key={ column } value={ column }>{column}</option>
            ))
          }
        </select>
        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={ handleChange }
          value={ numericFilter.comparison }
        >
          {
            comparisonFilter.map((comparison) => (
              <option key={ comparison } value={ comparison }>{comparison}</option>
            ))
          }
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
