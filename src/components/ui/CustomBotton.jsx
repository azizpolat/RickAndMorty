import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Colors from '../../theme/colors';

const CustomBotton = props => {
  const {title, backColor, titleColor = Colors.BACK} = props;
  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, {backgroundColor: backColor}]}>
      <Text style={[styles.title, {color: titleColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.GREEN,
    padding: 9,
    borderRadius: 5,
    margin: 5,
    flex: 1,
  },
  title: {
    fontSize: 17,
    color: Colors.WHITE,
  },
});

export default CustomBotton;
