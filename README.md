# API Clima

Esta é uma API simples para obter informações de temperatura de cidades usando a OpenWeatherMap API.

## Configuração

Antes de iniciar o servidor, você precisará configurar algumas variáveis de ambiente no arquivo `.env`:

- `API_KEY`: Chave de API da OpenWeatherMap. Você pode obter uma chave gratuitamente em [openweathermap.org](https://openweathermap.org/).

Certifique-se de instalar todas as dependências do projeto executando o comando `npm install`.

## Uso

### Obter temperatura de uma cidade

GET http://localhost:3000/temperature/:city

Retorna a temperatura atual da cidade especificada em Celsius e Fahrenheit.

#### Parâmetros

- `city` (obrigatório): O nome da cidade para obter a temperatura.

Exemplo de requisição:

GET http://localhost:3000/temperature/cordisburgo

Exemplo de resposta:

```json
{
  "city": "cordisburgo",
  "temperature": {
    "celsius": "15.45",
    "fahrenheit": "59.81"
  }
}
Em caso de erro ao obter a temperatura, a resposta terá um código de status 500 e um objeto JSON com a propriedade error indicando a mensagem de erro.

Contribuição
Contribuições são bem-vindas! Se você encontrar algum problema ou tiver alguma melhoria, sinta-se à vontade para abrir uma issue ou enviar um pull request.
