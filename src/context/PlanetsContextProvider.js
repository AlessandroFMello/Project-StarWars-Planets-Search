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
