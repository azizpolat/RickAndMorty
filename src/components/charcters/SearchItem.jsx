import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {ArrowRight2} from 'iconsax-react-native';
import Colors from '../../theme/colors';

import {CHARACTERDETAIL} from '../../utils/routes';
import {useNavigation} from '@react-navigation/native';

const SearchItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate(CHARACTERDETAIL, {characterID: item.id})
      }
      style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      <ArrowRight2 size="25" color={Colors.BLACK} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    borderBottomWidth: 0.5,
    borderColor: Colors.GRYN,
    padding: 10,
  },
  name: {
    fontSize: 18,
  },
});

export default SearchItem;
