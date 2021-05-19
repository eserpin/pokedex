import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const PokedexRow = ({map, list, cardClick}) => {
  const renderCaught = (pokemon) => {
    if (pokemon.caught) {
      return <Text>Caught</Text>;
    } else {
      return null;
    }
  };
  return (
    <View style={styles.pokeRow}>
      {list.map((index, i) => {
        var pokemon = map[index];
        return (
          <TouchableOpacity key={i} style={styles.pokeCard} onPress={() => cardClick(index)}>
            <Image
              style={styles.pokeImage}
              source={{uri: pokemon.sprites.front_default}}
            />
            {renderCaught(pokemon)}
            <Text style={styles.pokeName}>{pokemon.name}</Text>
            <Text style={styles.pokeTypeList}>
              {pokemon.types.map((typeObj, i2) => {
                return (
                  <Text key={i2} style={styles.pokeType}>
                    {i2 === pokemon.types.length - 1
                      ? typeObj.type.name
                      : typeObj.type.name + '/'}
                  </Text>
                );
              })}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  pokeRow: {
    flex: 1,
    flexDirection: 'row',
    height: 'auto',
    width: 'auto',
  },
  pokeCard: {
    width: 100,
    height: 100,
    padding: 10,
  },
  pokeImage: {
    width: 50,
    height: 50,
  },
  pokeName: {
    textAlign: 'left',
  },
});
export default PokedexRow;
