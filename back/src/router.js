const express = require ('express');
const SessionCotntroller = require('./controllers/SessionController');

const routes = express.Router();


routes.post('/users', SessionCotntroller.store);

module.exports = routes;