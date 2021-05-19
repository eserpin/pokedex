import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import SearchBar from './components/SearchBar.js';
import PokeModal from './components/PokeModal.js';
import PokedexList from './components/PokedexList.js';
import api from './api/getPokemonData';
import Icon from 'react-native-vector-icons/AntDesign';
const App = () => {
  const [currentPokemon, changePokemon] = useState('1');
  const [pokemonMap, setPokemonMap] = useState({});
  const [currentListStart, setListStart] = useState(0);
  const [pokemonIndex, setPokemonIndex] = useState({});
  const [screen, changeScreen] = useState(1);
  const [modal, setModal] = useState(false);
  const searchPokemon = name => {
    let invalid = (name === '') || (!pokemonIndex[name.toLowerCase()] && !pokemonMap[Number(name)]);
    if (invalid) {
      console.log('num?');
      console.log(typeof Number(name));
      return;
    }
    if (isNaN(Number(name))) {
      var id = pokemonIndex[name.toLowerCase()];
      setListStart(Number(id - 1));
    } else {
      setListStart(Number(name) - 1);
    }
  };
  const leftArrowClick = () => {
    if (currentListStart - 9 < 0) {
      setListStart(0);
    } else {
      setListStart(prev => {
        return prev - 9;
      });
    }
  };
  const rightArrowClick = () => {
    console.log(pokemonMap);
    if (currentListStart + 9 > 144) {
      setListStart(145);
    } else {
      setListStart(prev => {
        return prev + 9;
      });
    }
  };
  const cardClick = id => {
    changePokemon(id);
    setModal(true);
  };
  useEffect(() => {
    api.getKantoPokemon(result => {
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
          setPokemonIndex(index => {
            index[pokemonData.name.toLowerCase()] = pokemonData.id;
            return index;
          });
        });
      });
    });
  }, []);
  if (screen === 2) {
    return (
      <View style={styles.app}>
        <PokeModal
          pokemon={pokemonMap[currentPokemon]}
          showModal={modal}
          closeModal={() => {
            setModal(prev => !prev);
          }}
        />
        <SearchBar searchPokemon={searchPokemon} />
        <PokedexList
          map={pokemonMap}
          list={Object.keys(pokemonMap)}
          listStart={currentListStart}
          leftArrowClick={leftArrowClick}
          rightArrowClick={rightArrowClick}
          cardClick={cardClick}
        />
      </View>
    );
  } else {
    return (
      <TouchableOpacity style={styles.app} onPress={() => changeScreen(2)}>
        <Text style={styles.enterPage}>Enter Pokédex</Text>
        <Icon name="login" size={30} color="red" />
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  enterPage: {
    fontSize: 36,
    color: 'red',
  },
});
export default App;
