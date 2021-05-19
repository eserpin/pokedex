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
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
    color: 'red',
  },
});
export default SearchBar;
