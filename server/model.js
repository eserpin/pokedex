export default {
  getPokemonData: name => {
    console.log(name);
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  },
};
