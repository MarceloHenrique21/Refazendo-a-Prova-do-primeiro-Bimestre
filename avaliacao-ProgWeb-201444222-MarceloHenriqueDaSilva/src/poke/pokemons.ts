const fetch = require('node-fetch');

async function fetchPokemonData() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log('Ocorreu um erro ao buscar os dados do Pokémon:', error);
    return [];
  }
}

async function fetchPokemonDetails(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const { name, types, height, weight, moves } = data;
    const abilities = moves.slice(0, 4).map(move => move.move.name);

    const dexResponse = await fetch('https://pokeapi.co/api/v2/version/1/');
    const dexData = await dexResponse.json();
    const pokedexNumber = dexData.pokemon_entries.find(entry => entry.pokemon_species.name === name).entry_number;

    return {
      name,
      type: types.map(type => type.type.name),
      status: 'Normal',
      pokedexNumber,
      height,
      weight,
      moves: abilities
    };
  } catch (error) {
    console.log('Ocorreu um erro ao buscar os detalhes do Pokémon:', error);
    return null;
  }
}

async function fetchAllPokemonDetails() {
  const pokemonList = await fetchPokemonData();
  const pokemonDetailsPromises = pokemonList.map(pokemon => fetchPokemonDetails(pokemon.url));
  const pokemonDetails = await Promise.all(pokemonDetailsPromises);
  return pokemonDetails.filter(pokemon => pokemon !== null);
}

fetchAllPokemonDetails()
  .then(pokemonData => {
    console.log('Dados dos Pokémon:', pokemonData);
  });
