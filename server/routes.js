const controllers = require('./controllers');
const router = require('express').Router();

router.get('/pokemon', controllers.getPokemon);
