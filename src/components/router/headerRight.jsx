import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {FilterSearch, SearchNormal} from 'iconsax-react-native';
import Colors from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {CHARACTERFİLTER, CHARACTERSEARCH} from '../../utils/routes';

export default function HeaderRight() {
  const navigation = useNavigation();
  return (
    <Text style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate(CHARACTERSEARCH)}
        style={styles.button}>
        <SearchNormal size={27} color={Colors.BLACK} />
      </Pressable>{' '}
      <Pressable
        onPress={() => navigation.navigate(CHARACTERFİLTER)}
        style={styles.button}>
        <FilterSearch size={27} color={Colors.BLACK} />
      </Pressable>
    </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignItems: 'center',
    marginHorizontal: 5,
  },
  button: {
    marginHorizontal: 5,
  },
});
