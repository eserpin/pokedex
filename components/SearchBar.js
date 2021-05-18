import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const SearchBar = ({searchPokemon}) => {
  const [searchVal, updateSearchVal] = useState('');
  return (
    <View style={styles.view}>
      <TextInput
        onSubmitEditing={() => {
          searchPokemon(searchVal);
        }}
        onChangeText={search => {
          updateSearchVal(search);
        }}
        style={styles.searchBar}
        placeholder="search for a pokémon!"
        value={searchVal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  searchBar: {
    width: '100%',
    height: '100%',
    paddingLeft: 8,
    fontSize: 16,
    color: 'red',
  },
});
export default SearchBar;
