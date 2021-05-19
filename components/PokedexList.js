import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import PokedexRow from './PokedexRow.js';

const PokedexList = ({
  map,
  list,
  listStart,
  rightArrowClick,
  leftArrowClick,
}) => {
  let row1 = list.slice(listStart, listStart + 3);
  let row2 = list.slice(listStart + 3, listStart + 6);
  let row3 = list.slice(listStart + 6, listStart + 9);
  return (
    <View style={styles.pokeList}>
      <PokedexRow style={styles.pokeRow} map={map} list={row1} />
      <PokedexRow style={styles.pokeRow} map={map} list={row2} />
      <PokedexRow style={styles.pokeRow} map={map} list={row3} />
      <Icon.Button name="leftcircle"
        size={30}
        color="red"
        onPress={() => leftArrowClick()}
        borderRadius={0}
        backgroundColor="white"
      />
      <Icon.Button name="rightcircle"
        size={30}
        color="red"
        onPress={() => rightArrowClick()}
        borderRadius={0}
        backgroundColor="white"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pokeList: {
    flex: 3,
    flexDirection: 'column',
    height: '80%',
  },
});
export default PokedexList;
