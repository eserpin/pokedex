import React from 'react';
import {StyleSheet, Text, View, Modal, Image, Button} from 'react-native';

const PokeModal = ({pokemon, showModal, closeModal, addCaught}) => {
  return (
    <Modal style={styles.modal} visible={showModal}>
      <View style={styles.modalCard}>
        <Image
          style={styles.modalImage}
          source={{
            uri: pokemon.sprites.versions['generation-v']['black-white'].animated.front_default,
          }}
        />
        <View style={styles.modalInfo}>
          <View style={styles.modalTypes}>
            <Text style={styles.infoTitle}>
              {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
            </Text>
            {pokemon.types.map((typeObj, i2) => {
              return (
                <Text key={i2} style={styles.modalType}>
                  {i2 === pokemon.types.length - 1
                    ? typeObj.type.name
                    : typeObj.type.name + '/'}
                </Text>
              );
            })}
          </View>
          <View style={styles.abilityList}>
            <Text style={styles.infoTitle}>Abilities: </Text>
            {pokemon.abilities.map((abilityObj, i) => {
              return (
                <Text style={styles.abilityLine} key={i}>
                  {abilityObj.ability.name}
                </Text>
              );
            })}
          </View>
          <View style={styles.size}>
            <Text style={styles.infoTitle}>Size: </Text>
            <Text>Average Height - {pokemon.height * 10 + ' cm'}</Text>
            <Text>Average Weight - {pokemon.weight * 10 + ' kg'}</Text>
          </View>
          <View style={styles.stats}>
            <Text style={styles.infoTitle}>Stats: </Text>
            {pokemon.stats.map((statObj, i) => {
              return (
                <Text key={i} style={styles.statLine}>
                  {statObj.stat.name + ': ' + statObj.base_stat}
                </Text>
              );
            })}
          </View>
          <Button title="mark as caught"
            style={styles.catchButton}
            onPress={() => {
              console.log(pokemon.id.toString());
              addCaught(pokemon.id.toString());
            }}
          />
          <Button title="exit" style={styles.modalClose} onPress={closeModal} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    flex: 3,
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  modalInfo: {
    flex: 3,
  },
  infoTitle: {
    paddingTop: 10,
    fontSize: 22,
    color: 'red',
  },
  modalClose: {
    flex: 1,
  },
});
export default PokeModal;
