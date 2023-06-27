const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env

const app = express();
const port = 3000;

app.use(cors());

app.get('/temperature/:city', (req, res) => {
  const { city } = req.params;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;

  axios.get(url)
    .then(response => {
      const temperature = response.data.main.temp;

      // Faça a conversão para Celsius ou Fahrenheit conforme necessário
      const temperatureCelsius = temperature - 273.15;
      const temperatureFahrenheit = (temperature - 273.15) * 9/5 + 32;

      // Retorna a temperatura em formato JSON
      res.json({
        city,
        temperature: {
          celsius: temperatureCelsius.toFixed(2),
          fahrenheit: temperatureFahrenheit.toFixed(2)
        }
      });
    })
    .catch(error => {
      console.error('Erro ao obter dados da API:', error);
      // Retorna uma resposta de erro
      res.status(500).json({ error: 'Erro ao obter temperatura da cidade.' });
    });
});

app.get('/all-data/:city', (req, res) => {
  const { city } = req.params;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;

  axios.get(url)
    .then(response => {
      const allData = response.data; // Obter todos os dados da resposta da API

      res.json({
        city,
        allData: allData  // Retorna todos os dados da API
      });
    })
    .catch(error => {
      console.error('Erro ao obter dados da API:', error);
      res.status(500).json({ error: 'Erro ao obter dados da API.' });
    });
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
