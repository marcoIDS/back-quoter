'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

/** @type {import('@adonisjs/ignitor/src/Helpers')} */
const Helpers = use('Helpers')

const Url = require('url-parse')
const DATABASE_URL = new Url(Env.get('DATABASE_URL'))

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Default Connection
  |--------------------------------------------------------------------------
  |
  | Connection defines the default connection settings to be used while
  | interacting with SQL databases.
  |
  */
  connection: Env.get('DB_CONNECTION', 'pg'),

  /*
  |--------------------------------------------------------------------------
  | Sqlite
  |--------------------------------------------------------------------------
  |
  | Sqlite is a flat file database and can be good choice under development
  | environment.
  |
  | npm i --save sqlite3
  |
  */
  sqlite: {
    client: 'sqlite3',
    connection: {
      filename: Helpers.databasePath(`${Env.get('DB_DATABASE', 'development')}.sqlite`)
    },
    useNullAsDefault: true
  },

  /*
  |--------------------------------------------------------------------------
  | MySQL
  |--------------------------------------------------------------------------
  |
  | Here we define connection settings for MySQL database.
  |
  | npm i --save mysql
  |
  */
  mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('DB_HOST', 'localhost'),
      port: Env.get('DB_PORT', ''),
      user: Env.get('DB_USER', 'root'),
      password: Env.get('DB_PASSWORD', 'root'),
      database: Env.get('DB_DATABASE', 'quoterbd')
    }
  },

  /*
  |--------------------------------------------------------------------------
  | PostgreSQL
  |--------------------------------------------------------------------------
  |
  | Here we define connection settings for PostgreSQL database.
  |
  | npm i --save pg
  |
  */
 //pg connection
  /*pg: {
    client: 'pg',
    connection: {
      host: Env.get('DB_HOST', 'ec2-52-86-73-86.compute-1.amazonaws.com'),
      port: Env.get('DB_PORT', '5432'),
      user: Env.get('DB_USER', 'mxrmnwxzirraju'),
      password: Env.get('DB_PASSWORD', '9c8d062ea6c261d4b9d1661fa8ce9b194ba40073f1e15d1df40d11b98ce35e07'),
      database: Env.get('DB_DATABASE', 'dcb785a69fleuf')
    }
  }*/

  pg: {
    client: 'pg',
    connection: {
      host: Env.get('DB_HOST', DATABASE_URL.hostname),
      port: Env.get('DB_PORT', DATABASE_URL.port),
      user: Env.get('DB_USER', DATABASE_URL.username),
      password: Env.get('DB_PASSWORD', DATABASE_URL.password),
      database: Env.get('DB_DATABASE', DATABASE_URL.pathname.substr(1))
    }
   }
}
