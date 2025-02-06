import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import React from 'react';
import Colors from '../../theme/colors';
import GenderIcon from './GenderIcon';
import {ArrowRight} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {CHARACTERDETAIL} from '../../utils/routes';

export default function CharacterCard({item}) {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate(CHARACTERDETAIL, {characterID: item.id})
      }
      style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: item.image}} style={styles.image} />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.species}>{item.species}</Text>
        <View style={styles.statusContainer}>
          <Text style={styles.status}>{item.status}</Text>
        </View>
        <View style={styles.genderContainer}>
          <GenderIcon size={15} gender={item.gender} />
          <Text style={styles.gender}>{item.gender}</Text>
        </View>
      </View>

      <View style={styles.iconContainer}>
        <ArrowRight size={20} color={Colors.BLACK} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#e4dccf',
    margin: 5,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  imageContainer: {
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  species: {
    fontSize: 14,
    color: Colors.GRAY,
    marginBottom: 5,
  },
  statusContainer: {
    marginBottom: 5,
  },
  status: {
    fontSize: 12,
    color: Colors.DARK_GRAY,
  },
  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gender: {
    fontSize: 12,
    marginLeft: 5,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingLeft: 10,
  },
});
