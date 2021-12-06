const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function fetchAPI() {
  const response = await fetch(URL);
  const json = await response.json();
  console.log(json);
}

export default fetchAPI;
