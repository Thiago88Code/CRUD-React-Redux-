# FinancialManager-Api

Bem-vindo! Esta é uma API que simula o funcionamento de uma API bancária, 
Principais funcionalidades da API:

- Autenticação Segura: garantindo que apenas usuários autorizados possam acessar as informações e executar operações.

- Transações : operações de depósito, saque e pagamento.

- Transferências

- Saldo:  

A documentação desta API está atualmente em construção.

### 📋 Prerequisites

You must have installed:
- Node and Npm
- Postgres

### Getting Started 

### 🔧 Installing all dependencies using npm:

```
npm install 
```

### To run this api:
```
npm start
```


###  Database configuration

Create your Postgres database according to your preferences and fill on "knexfile.js" in the "prod"
object.

```
  prod: {
    client: 'postgres',
    version: '8.9.0',
    connection: {
      host: '',
      user: '',
      database: '',
      password: '',
    },
    migrations: {
      directory: 'src/migrations',
    },
  },

```
## Test environment

### Database configuration

Create your Postgres database according to your preferences and fill on "knexfile.js" in the "test"
object.

```
  test: {
    client: 'postgres',
    version: '8.9.0',
    connection: {
      host: '',
      user: '', 
      database: ''
      password: ''
    },
    migrations: {
      directory: 'src/migrations',
    },
    seeds: {
      directory: 'src/seeds',
    },
  }
```
### run migrations:
```
npm run migration
```
### run seeds:
```
npm run seed
```
### run test:
```
npm run test
```


⌨️ com ❤️ por [Thiago Souza](https://github.com/Thiago88Code) 😊

