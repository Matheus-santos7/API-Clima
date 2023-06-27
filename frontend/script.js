document.getElementById('temperatureForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const city = document.getElementById('cityInput').value;
  
    fetch(`http://localhost:3000/temperature/${city}`)
    .then(response => response.json())
      .then(data => {
        const resultContainer = document.getElementById('resultContainer');
        resultContainer.innerHTML = `Temperatura em ${data.city}:<br>Celsius: ${data.temperature.celsius} °C<br>Fahrenheit: ${data.temperature.fahrenheit} °F`;
      })
      .catch(error => {
        console.error('Erro ao buscar temperatura:', error);
        const resultContainer = document.getElementById('resultContainer');
        resultContainer.innerHTML = 'Erro ao buscar temperatura. Verifique se o nome da cidade está correto.';
      });
  });
  