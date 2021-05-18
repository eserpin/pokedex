const model = require('./model');
export default {
  getPokemon: (req, res) => {
    res.status(200).send(model.getPokemonData(req.query.name));
  },
};
