const express = require('express');
const helmet = require('helmet');

const foodRouter = require('./router/recipe-router')
const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/', foodRouter)

module.exports = server;
