const express = require('express');
const helmet = require('helmet');

const projectsRouter = require('./data/projects/projects-router');
const actionsRouter = require('./data/actions/actions-router');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);


module.exports = server;