const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Team = require('./TeamSchema');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/pokemon', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Conectado ao MongoDB');
  })
  .catch((error) => {
    console.error('Erro ao conectar ao MongoDB:', error);
  });

// Rota POST para criar um novo time
app.post('/teams', async (req, res) => {
  try {
    const { trainerName, pokemons } = req.body;

    // Buscar os pokémons no banco de dados
    const pokemonNames = pokemons.map(pokemon => pokemon.name);
    const foundPokemons = await Pokemon.find({ name: { $in: pokemonNames } });

    // Verificar se todos os pokémons foram encontrados
    if (foundPokemons.length !== pokemons.length) {
      return res.status(400).json({ error: 'Alguns pokémons não foram encontrados' });
    }

    // Criar o time
    const team = await Team.create({ trainerName, team: foundPokemons });

    return res.json(team);
  } catch (error) {
    console.error('Erro ao criar o time:', error);
    return res.status(500).json({ error: 'Erro ao criar o time' });
  }
});

// Rota GET para visualizar todos os times cadastrados
app.get('/teams', async (req, res) => {
  try {
    const teams = await Team.find();
    return res.json(teams);
  } catch (error) {
    console.error('Erro ao buscar os times:', error);
    return res.status(500).json({ error: 'Erro ao buscar os times' });
  }
});

// Rota GET para filtrar um time por nome do treinador
app.get('/teams/:trainerName', async (req, res) => {
  try {
    const { trainerName } = req.params;
    const team = await Team.findOne({ trainerName });
    if (!team) {
      return res.status(404).json({ error: 'Time não encontrado' });
    }
    return res.json(team);
  } catch (error) {
    console.error('Erro ao buscar o time:', error);
    return res.status(500).json({ error: 'Erro ao buscar o time' });
  }
});

// Rota PUT para alterar as informações de um time pelo nome do treinador
app.put('/teams/:trainerName', async (req, res) => {
  try {
    const { trainerName } = req.params;
    const { pokemons } = req.body;

    // Buscar os pokémons no banco de dados
    const pokemonNames = pokemons.map(pokemon => pokemon.name);
    const foundPokemons = await Pokemon.find({ name: { $in: pokemonNames } });

    // Verificar se todos os pokémons foram encontrados
    if (foundPokemons.length !== pokemons.length) {
      return res.status(400).json({ error: 'Alguns pokémons não foram encontrados' });
    }

    const updatedTeam = await Team.findOneAndUpdate(
      { trainerName },
      { team: foundPokemons },
      { new: true }
    );

    if (!updatedTeam) {
      return res.status(404).json({ error: 'Time não encontrado' });
    }

    return res.json(updatedTeam);
  } catch (error) {
    console.error('Erro ao atualizar o time:', error);
    return res.status(500).json({ error: 'Erro ao atualizar o time' });
  }
});

// Rota DELETE para remover um time pelo nome do treinador
app.delete('/teams/:trainerName', async (req, res) => {
  try {
    const { trainerName } = req.params;
    const deletedTeam = await Team.findOneAndDelete({ trainerName });

    if (!deletedTeam) {
      return res.status(404).json({ error: 'Time não encontrado' });
    }

    return res.json(deletedTeam);
  } catch (error) {
    console.error('Erro ao remover o time:', error);
    return res.status(500).json({ error: 'Erro ao remover o time' });
  }
});

// Rota GET para filtrar os pokémons por tipo
app.get('/pokemon/type/:type', async (req, res) => {
  try {
    const { type } = req.params;
    const pokemons = await Pokemon.find({ types: type });
    return res.json(pokemons);
  } catch (error) {
    console.error('Erro ao buscar os pokémons por tipo:', error);
    return res.status(500).json({ error: 'Erro ao buscar os pokémons por tipo' });
  }
});

// Rota GET para filtrar o pokémon pelo número na Pokédex
app.get('/pokemon/dex/:dexNumber', async (req, res) => {
  try {
    const { dexNumber } = req.params;
    const pokemon = await Pokemon.findOne({ dexNumber });
    if (!pokemon) {
      return res.status(404).json({ error: 'Pokémon não encontrado' });
    }
    return res.json(pokemon);
  } catch (error) {
    console.error('Erro ao buscar o pokémon:', error);
    return res.status(500).json({ error: 'Erro ao buscar o pokémon' });
  }
});

// Rota GET para filtrar o pokémon pelo nome
app.get('/pokemon/name/:name', async (req, res) => {
  try {
    const { name } = req.params;
    const pokemon = await Pokemon.findOne({ name });
    if (!pokemon) {
      return res.status(404).json({ error: 'Pokémon não encontrado' });
    }
    return res.json(pokemon);
  } catch (error) {
    console.error('Erro ao buscar o pokémon:', error);
    return res.status(500).json({ error: 'Erro ao buscar o pokémon' });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
