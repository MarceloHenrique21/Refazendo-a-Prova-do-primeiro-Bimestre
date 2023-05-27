const fetch = require('node-fetch');

async function fetchPokemonData() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Ocorreu um erro ao buscar os dados do Pokémon:', error);
    return null;
  }
}

fetchPokemonData()
  .then((data) => {
    if (data) {
      console.log('Dados do Pokémon:', data);
    }
  });
