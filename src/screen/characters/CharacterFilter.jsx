import {Scroll} from 'iconsax-react-native';
import React from 'react';
import {Button, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import screenStyles from '../../styles/screenStyles';
import Colors from '../../theme/colors';
import {genders, status} from '../../utils/contanst';
import {useDispatch, useSelector} from 'react-redux';
import {changeParams} from '../../store/actions/characterActions';
import CustomBotton from '../../components/ui/CustomBotton';
import {useNavigation} from '@react-navigation/native';

const CharactersFilter = () => {
  const dispatch = useDispatch();
  const navigations = useNavigation();
  const {params} = useSelector(state => state.characters);

  const filterNavigate = () => {
    navigations.goBack();
  };

  const clearFilter = () => {
    navigations.goBack();
  };

  return (
    <View style={screenStyles.container}>
      <View style={{flex: 1}}>
        <ScrollView>
          <Text
            style={{
              fontSize: 18,
              color: Colors.GRYN,
              fontWeight: 'bold',
              marginVertical: 10,
            }}>
            Gender
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            {genders.map(item => (
              <TouchableOpacity
                onPress={() => dispatch(changeParams({gender: item.value}))}
                key={item.id}
                style={{
                  backgroundColor:
                    params.gender == item.value ? Colors.GREEN : Colors.BROWN,
                  padding: 10,
                  margin: 3,
                  borderRadius: 5,
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: Colors.WHITE}}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text
            style={{
              fontSize: 18,
              color: Colors.GRYN,
              fontWeight: 'bold',
              marginVertical: 10,
            }}>
            Status
          </Text>

          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            {status.map(item => (
              <TouchableOpacity
                onPress={() => dispatch(changeParams({status: item.value}))}
                key={item.id}
                style={{
                  backgroundColor:
                    params.status == item.value ? Colors.GREEN : Colors.BROWN,
                  padding: 10,
                  margin: 3,
                  borderRadius: 5,
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: Colors.WHITE}}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>

      <View style={{flexDirection: 'row', paddingBottom: 20}}>
        <CustomBotton
          onPress={() => filterNavigate()}
          title="Filter"
          backColor={Colors.GREEN}
        />

        <CustomBotton
          onPress={() => clearFilter()}
          title="Clear"
          backColor={Colors.GOLD}
        />
      </View>
    </View>
  );
};

export default CharactersFilter;
