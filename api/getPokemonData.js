import axios from 'axios';
const getSinglePokemon = (search, cb) => {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${search.toString().toLowerCase()}`)
    .then(result => {
      cb(result.data);
    })
    .catch(err => {
      console.log('ERROR: ', err);
      cb('error');
    });
};
const getKantoPokemon = cb => {
  axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(result => {
      console.log('ALL POKEMON RESULT: ', result);
      cb(result.data.results);
    })
    .catch(err => {
      console.log('ERROR: ', err);
      cb(err);
    });
};
export default {
  getSinglePokemon,
  getKantoPokemon,
};
