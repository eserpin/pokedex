import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const PokeBox = ({pokemon}) => {
  return (
    <View style={styles.view}>
      <Text>{JSON.stringify(pokemon)}</Text>
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
export default PokeBox;
