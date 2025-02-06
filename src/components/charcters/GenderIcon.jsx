import {View, Text} from 'react-native';
import React from 'react';
import {genderTypes} from '../../utils/contanst';
import {Command, Man, Woman} from 'iconsax-react-native';
import Colors from '../../theme/colors';

const GenderIcon = ({gender, size}) => {
  if (gender == genderTypes.MALE) {
    return <Man size={size} color={Colors.BLACK} />;
  }

  if (gender == genderTypes.FEMALE) {
    return <Woman size={size} color={Colors.BLACK} />;
  }

  if (gender == genderTypes.UNKNOW) {
    return <Command size={size} color={Colors.BLACK} />;
  }
};

export default GenderIcon;
