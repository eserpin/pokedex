import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const PokedexRow = ({map, list}) => {
  return (
    <View style={styles.pokeRow}>
      {list.map((index, i) => {
        var pokemon = map[index];
        return (
          <View key={i} style={styles.pokeCard}>
            <Image
              style={styles.pokeImage}
              source={{uri: pokemon.sprites.front_default}}
            />
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
          </View>
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
    width: 80,
    height: 80,
    padding: 10,
  },
  pokeImage: {
    width: 50,
    height: 50,
  },
});
export default PokedexRow;
