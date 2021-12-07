import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function Table() {
  const { filteredPlanets } = useContext(PlanetsContext);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Período de Rotação</th>
          <th>Periodo da Órbita</th>
          <th>Diâmetro</th>
          <th>Clima</th>
          <th>Gravidade</th>
          <th>Terreno</th>
          <th>Água</th>
          <th>População</th>
          <th>Filmes</th>
          <th>Criado</th>
          <th>Editado</th>
          <th>URL</th>
        </tr>
      </thead>
      {filteredPlanets.map(({
        name,
        rotation_period: rotationPeriod,
        orbital_period: orbitalPeriod,
        diameter,
        climate,
        gravity,
        terrain,
        surface_water: surfaceWater,
        population,
        films,
        edited,
        created,
        url,
      }) => (
        <tbody key={ name }>
          <tr>
            <td>{name}</td>
            <td>{rotationPeriod}</td>
            <td>{orbitalPeriod}</td>
            <td>{diameter}</td>
            <td>{climate}</td>
            <td>{gravity}</td>
            <td>{terrain}</td>
            <td>{surfaceWater}</td>
            <td>{population}</td>
            <td>{films}</td>
            <td>{created}</td>
            <td>{edited}</td>
            <td>{url}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}
