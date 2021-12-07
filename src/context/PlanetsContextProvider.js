import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import PlanetsContext from './PlanetsContext';
import fetchAPI from '../services/fetchAPI';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [nameFilter, setNameFilter] = useState({
    filterByName: {
      name: '',
    },
  });
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [hasFilter, setHasFilter] = useState(false);
  const [numericFilter, setnumericFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  const [columnFilter, setColumnFilter] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [comparisonFilter, setComparisonFilter] = useState([
    'maior que',
    'menor que',
    'igual a',
  ]);

  async function getPlanetsResults() {
    const fetchedPlanets = await fetchAPI();
    const planetsResults = fetchedPlanets.results;
    planetsResults.forEach((result) => delete result.residents);
    setPlanets(planetsResults);
  }

  function handleInput({ target }) {
    const { value } = target;
    setNameFilter({
      filterByName: {
        name: value,
      },
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setHasFilter(true);

    const filterByValue = planets.filter((planet) => {
      const comparisonsObj = {
        'maior que': Number(planet[numericFilter.column]) > Number(numericFilter.value),
        'menor que': Number(planet[numericFilter.column]) < Number(numericFilter.value),
        'igual a': Number(planet[numericFilter.column]) === Number(numericFilter.value),
      };

      return comparisonsObj[numericFilter.comparison];
    });
    setFilteredPlanets(filterByValue);
  }

  function handleChange({ target: { name, value } }) {
    setnumericFilter({
      ...numericFilter,
      [name]: value,
    });
  }

  useEffect(() => {
    getPlanetsResults();
  }, []);

  useEffect(() => {
    function getPlanetsFilteredByName() {
      const filteredPlanetsArray = planets.filter((planet) => {
        const filteredName = nameFilter.filterByName.name.toLowerCase();
        const planetsFilter = planet.name.toLowerCase().includes(filteredName);
        return planetsFilter;
      });
      setFilteredPlanets(filteredPlanetsArray);
    }
    getPlanetsFilteredByName();
  }, [nameFilter, planets]);

  const context = {
    planets,
    nameFilter,
    handleInput,
    filteredPlanets,
    handleSubmit,
    hasFilter,
    handleChange,
    numericFilter,
    columnFilter,
    setColumnFilter,
    comparisonFilter,
    setComparisonFilter,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
