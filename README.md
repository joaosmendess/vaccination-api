# Vaccination Points API

Esta API permite o gerenciamento de pontos de vacinação, incluindo operações para criação, leitura, atualização e exclusão (CRUD) de pontos de vacinação em várias cidades. Além disso, a API suporta a inserção de dados de exemplo para facilitar os testes.

## Tecnologias

- **NestJS**: Framework para construção da API.
- **MongoDB**: Banco de dados NoSQL para armazenar dados de vacinação e cidades.
- **Mongoose**: Biblioteca para modelagem de dados MongoDB em Node.js.

## Endpoints da API

A API possui os seguintes endpoints:

### 1. **Cadastrar Cidades**
Este endpoint permite a criação de novas cidades que poderão ser associadas a pontos de vacinação.

- **Método**: `POST`
- **Rota**: `/cities`
- **Corpo da Requisição**:
    +++json
    {
      "name": "Maceió",
      "state": "Alagoas"
    }
    +++
- **Resposta**:
    +++json
    {
      "_id": "ID_DA_CIDADE",
      "name": "Maceió",
      "state": "Alagoas",
      "__v": 0
    }
    +++

### 2. **Listar todas as Cidades**
Este endpoint retorna todas as cidades cadastradas.

- **Método**: `GET`
- **Rota**: `/cities`
- **Resposta**:
    +++json
    [
      {
        "_id": "ID_DA_CIDADE",
        "name": "Maceió",
        "state": "Alagoas",
        "__v": 0
      },
      {
        "_id": "ID_OUTRA_CIDADE",
        "name": "Arapiraca",
        "state": "Alagoas",
        "__v": 0
      }
    ]
    +++

### 3. **Cadastrar Pontos de Vacinação**
Este endpoint permite criar novos pontos de vacinação, associando-os a uma cidade.

- **Método**: `POST`
- **Rota**: `/vaccination-points`
- **Corpo da Requisição**:
    +++json
    {
      "name": "Ponto de Vacinação Maceió",
      "address": "Rua das Flores, Maceió, AL",
      "cityId": "ID_DA_CIDADE_MACEIO",
      "hours": "8:00 - 17:00"
    }
    +++
- **Resposta**:
    +++json
    {
      "_id": "ID_DO_PONTO_VACINACAO",
      "name": "Ponto de Vacinação Maceió",
      "address": "Rua das Flores, Maceió, AL",
      "cityId": "ID_DA_CIDADE_MACEIO",
      "hours": "8:00 - 17:00",
      "__v": 0
    }
    +++

### 4. **Listar Pontos de Vacinação por Cidade**
Este endpoint retorna todos os pontos de vacinação cadastrados para uma cidade específica.

- **Método**: `GET`
- **Rota**: `/vaccination-points/:cityId`
- **Parâmetros**: `cityId` - ID da cidade
- **Exemplo de URL**:
    +++bash
    /vaccination-points/ID_DA_CIDADE_MACEIO
    +++
- **Resposta**:
    +++json
    [
      {
        "_id": "ID_DO_PONTO_VACINACAO",
        "name": "Ponto de Vacinação Maceió",
        "address": "Rua das Flores, Maceió, AL",
        "cityId": "ID_DA_CIDADE_MACEIO",
        "hours": "8:00 - 17:00",
        "__v": 0
      }
    ]
    +++

### 5. **Atualizar um Ponto de Vacinação**
Este endpoint permite atualizar um ponto de vacinação existente.

- **Método**: `PUT`
- **Rota**: `/vaccination-points/:id`
- **Parâmetros**: `id` - ID do ponto de vacinação
- **Corpo da Requisição**:
    +++json
    {
      "name": "Novo Ponto de Vacinação Maceió",
      "address": "Avenida X, Maceió, AL",
      "cityId": "ID_DA_CIDADE_MACEIO",
      "hours": "9:00 - 18:00"
    }
    +++
- **Resposta**:
    +++json
    {
      "_id": "ID_DO_PONTO_VACINACAO",
      "name": "Novo Ponto de Vacinação Maceió",
      "address": "Avenida X, Maceió, AL",
      "cityId": "ID_DA_CIDADE_MACEIO",
      "hours": "9:00 - 18:00",
      "__v": 0
    }
    +++

### 6. **Remover um Ponto de Vacinação**
Este endpoint permite remover um ponto de vacinação.

- **Método**: `DELETE`
- **Rota**: `/vaccination-points/:id`
- **Parâmetros**: `id` - ID do ponto de vacinação
- **Resposta**:
    +++json
    {
      "_id": "ID_DO_PONTO_VACINACAO",
      "name": "Ponto de Vacinação Maceió",
      "address": "Rua das Flores, Maceió, AL",
      "cityId": "ID_DA_CIDADE_MACEIO",
      "hours": "8:00 - 17:00",
      "__v": 0
    }
    +++

### 7. **Inserir Dados de Exemplo**
Este endpoint insere dados de exemplo para facilitar o teste da API.

- **Método**: `GET`
- **Rota**: `/vaccination-points/seed`
- **Resposta**:
    +++json
    {
      "message": "Dados de pontos de vacinação inseridos com sucesso!"
    }
    +++

## Como Rodar a API

### Pré-requisitos

- **Node.js** (versão 16 ou superior)
- **MongoDB** (local ou MongoDB Atlas)

### Instalação

1. Clone o repositório para sua máquina:
    +++bash
    git clone https://github.com/joaosmendess/vaccination-api.git
    cd vaccination-api
    +++

2. Instale as dependências:
    +++bash
    npm install
    +++

3. Configure o MongoDB (se necessário):
    - Se estiver usando o MongoDB localmente, certifique-se de que o MongoDB está rodando.
    - Se estiver usando o MongoDB Atlas, adicione a URL de conexão no arquivo `.env`.

4. Inicie a aplicação:
    +++bash
    npm run start
    +++

A API estará disponível em `http://localhost:3000`.

## Testes com o Postman

Para testar a API, você pode importar o arquivo de coleção do Postman (se fornecido) ou criar as requisições manualmente com base nas informações fornecidas acima.


