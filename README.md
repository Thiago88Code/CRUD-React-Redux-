# FinancialManager-Api

Welcome! This is an API that simulates the functionality of a banking API. Key features of the API include:

- Secure Authentication: ensuring that only authorized users can access information and perform operations.

- Transactions

- Transfers

- Balance

The documentation for this API is currently under construction.


### 📋 Prerequisites

You must have installed:
- Node and Npm
- Postgres

## Getting Started:

### 🔧 Installing all dependencies using npm

```
npm install 
```

### To run this api
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


### Database configuration in test environment

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
### To run migrations
```
npm run migration
```
### To run seeds
```
npm run seed
```
### To run tests
```
npm run test
```


⌨️ com ❤️ por [Thiago Souza](https://github.com/Thiago88Code) 😊

