# FinancialManager-Api

Bem-vindo! Esta é uma API que simula o funcionamento de uma API bancária, 
Principais funcionalidades da API:

1. Autenticação Segura: garantindo que apenas usuários autorizados possam acessar as informações e executar operações.

2. Transações : operações de depósito, saque e pagamento.

3. Transferências

4. Saldo:  

A documentação desta API está atualmente em construção.

### 📋 Prerequisites

You must have installed:
- Node and Npm
- Postgres

# Getting Started 


### 🔧 Installing all dependencies using npm:

```
npm install 
```

To run the api:

### `npm start`

============================================

## Test environment

###  Database creation:

Create your Postgres database according to your preferences and fill on "knexfile.js" in the "test"
object so that you can run the migrations and seeds

```
module.exports = { 
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
};
```
## run migrations:
```
### `npm run migration`
```
## run seeds:
```
### `npm run seed`
```
## run test:
```
### `npm run test`
```


⌨️ com ❤️ por [Thiago Souza](https://github.com/Thiago88Code) 😊

