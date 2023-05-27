let timesPokemon = [];

// Função para criar um novo time de Pokémon
function criarTime(nomeTreinador, pokemons) {
  const time = {
    nomeTreinador,
    pokemons
  };
  timesPokemon.push(time);
  return time;
}

// Função para ler os times de Pokémon
function lerTimes() {
  return timesPokemon;
}

// Função para atualizar um time de Pokémon
function atualizarTime(id, nomeTreinador, pokemons) {
  const time = timesPokemon[id];
  if (time) {
    time.nomeTreinador = nomeTreinador;
    time.pokemons = pokemons;
    return time;
  }
  return null;
}

// Função para deletar um time de Pokémon
function deletarTime(id) {
  const time = timesPokemon[id];
  if (time) {
    timesPokemon.splice(id, 1);
    return true;
  }
  return false;
}

// Exemplos de uso

// Criar um novo time de Pokémon
const novoTime = criarTime("Ash Ketchum", ["Pikachu", "Charizard", "Bulbasaur", "Squirtle", "Butterfree", "Pidgeot"]);
console.log("Novo time de Pokémon:", novoTime);

// Ler todos os times de Pokémon
const todosTimes = lerTimes();
console.log("Todos os times de Pokémon:", todosTimes);

// Atualizar um time de Pokémon
const timeAtualizado = atualizarTime(0, "Red", ["Espeon", "Tyranitar", "Lapras", "Arcanine", "Alakazam", "Snorlax"]);
console.log("Time de Pokémon atualizado:", timeAtualizado);

// Deletar um time de Pokémon
const timeDeletado = deletarTime(0);
console.log("Time de Pokémon deletado:", timeDeletado);

// Ler os times de Pokémon atualizados
const timesAtualizados = lerTimes();
console.log("Times de Pokémon atualizados:", timesAtualizados);
