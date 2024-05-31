"use strict";// lembrar de permitir conexao do firewall DO SERVER na porta desejada(3306)

require('dotenv').config();

module.exports = {
    /* SQLite */
    // dialect: 'sqlite',
    // storage: './db.sqlite',

    /* MySQL / MariaDB */
    dialect: 'mariadb',
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    dialectOptions: {
        timezone: 'America/Sao_Paulo',
    },
    timezone: 'America/Sao_Paulo',

    /* ALL */
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    },
};
