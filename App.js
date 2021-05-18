/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from './components/SearchBar.js';
import PokeBox from './components/PokeBox.js';
import PokedexList from './components/PokedexList.js';
import api from './api/getPokemonData';
import axios from 'axios';
const App = () => {
  const [currentPokemon, changePokemon] = useState('pikachu');
  const [pokemonMap, setPokemonMap] = useState({});
  const [currentListStart, setListStart] = useState(0);
  const searchPokemon = name => {
    api.getSinglePokemon(name, result => {
      if (result === 'error') {
        return;
      }
      changePokemon(result);
      console.log('CURRENT MON: ', currentPokemon);
      console.log('MAP: ', pokemonMap);
    });
  };
  useEffect(() => {
    api.getKantoPokemon(result => {
      console.log('FORMATTED RESULT: ', result);
      result.forEach(pokemon => {
        api.getSinglePokemon(pokemon.name, pokemonData => {
          if (pokemonData === 'error') {
            console.log('COULD NOT SET POKEMON LIST');
            return;
          }
          setPokemonMap(map => {
            map[pokemonData.id] = pokemonData;
            return map;
          });
        });
      });
    });
  }, []);
  useEffect(() => {
    setListStart(0);
  }, [pokemonMap]);
  return (
    <View style={styles.app}>
      <SearchBar searchPokemon={searchPokemon} />
      <PokeBox pokemon={currentPokemon} />
      <PokedexList
        map={pokemonMap}
        list={Object.keys(pokemonMap)}
        listStart={currentListStart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
export default App;
