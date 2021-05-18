import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import PokedexRow from './PokedexRow.js';

const PokedexList = ({
  map,
  list,
  listStart,
  rightArrowClick,
  leftArrowClick,
}) => {
  if (map['1']) {
    let row1 = list.slice(listStart, listStart + 3);
    let row2 = list.slice(listStart + 3, listStart + 6);
    let row3 = list.slice(listStart + 6, listStart + 9);
    return (
      <View style={styles.pokeList}>
        <PokedexRow style={styles.pokeRow} map={map} list={row1} />
        <PokedexRow style={styles.pokeRow} map={map} list={row2} />
        <PokedexRow style={styles.pokeRow} map={map} list={row3} />
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  pokeList: {
    flex: 1,
    flexDirection: 'column',
    height: '80%',
  },
});
export default PokedexList;
