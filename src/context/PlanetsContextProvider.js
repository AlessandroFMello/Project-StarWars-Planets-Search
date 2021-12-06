import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import PlanetsContext from './PlanetsContext';
import fetchAPI from '../services/fetchAPI';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  async function getPlanetsResults() {
    const fetchedPlanets = await fetchAPI();
    const planetsResults = fetchedPlanets.results;
    setPlanets(planetsResults);
  }

  useEffect(() => {
    getPlanetsResults();
  }, []);

  return (
    <PlanetsContext.Provider value={ planets }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
