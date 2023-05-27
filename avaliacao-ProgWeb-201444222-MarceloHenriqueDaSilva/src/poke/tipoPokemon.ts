const fs = require('fs');

function criarArraysPorTipo(dadosPokemons) {
  const arraysPorTipo = {};

  dadosPokemons.forEach(pokemon => {
    pokemon.tipo.forEach(tipo => {
      if (!arraysPorTipo[tipo]) {
        arraysPorTipo[tipo] = [];
      }
      arraysPorTipo[tipo].push(pokemon);
    });
  });

  for (const tipo in arraysPorTipo) {
    arraysPorTipo[tipo] = arraysPorTipo[tipo].sort((a, b) => a.numeroDex - b.numeroDex);
  }

  return arraysPorTipo;
}

function salvarArquivoJSON(dados, nomeArquivo) {
  fs.writeFileSync(nomeArquivo, JSON.stringify(dados));
}

const dadosPokemons = [
    {
      nome: "Bulbasaur",
      tipo: ["Grass", "Poison"],
      status: { hp: 45, atk: 49, def: 49 },
      numeroDex: 1,
      altura: 0.7,
      peso: 6.9,
      moves: ["Tackle", "Growl", "Leech Seed", "Vine Whip"]
    },
    {
      nome: "Charmander",
      tipo: ["Fire"],
      status: { hp: 39, atk: 52, def: 43 },
      numeroDex: 4,
      altura: 0.6,
      peso: 8.5,
      moves: ["Scratch", "Growl", "Ember", "Smokescreen"]
    },
    {
      nome: "Squirtle",
      tipo: ["Water"],
      status: { hp: 44, atk: 48, def: 65 },
      numeroDex: 7,
      altura: 0.5,
      peso: 9.0,
      moves: ["Tackle", "Tail Whip", "Bubble", "Water Gun"]
    }
  ];
  

const arraysPorTipo = criarArraysPorTipo(dadosPokemons);
salvarArquivoJSON(arraysPorTipo, 'pokemons_por_tipo.json');
