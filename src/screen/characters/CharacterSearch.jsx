import React, {useEffect, useState} from 'react';
import {FlatList, Text, TextInput, View} from 'react-native';

import Colors from '../../theme/colors';
import screenStyles from '../../styles/screenStyles';
import CustomBotton from '../../components/ui/CustomBotton';
import {useDispatch, useSelector} from 'react-redux';
import {
  changeParams,
  getCharacterList,
} from '../../store/actions/characterActions';
import SearchItem from '../../components/charcters/SearchItem';

export default function CharactersSearch() {
  const {characterList, pending, params} = useSelector(
    state => state.characters,
  );

  const [searchText, setSearchText] = useState('');

  const handleSubmit = () => {
    dispatch(changeParams({name: searchText}));
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCharacterList(params));
  }, []);
  const ListHeaderComponent = () => {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TextInput
          onSubmitEditing={handleSubmit}
          value={searchText}
          placeholder="Search Character"
          style={{
            width: '95%',
            borderWidth: 0.5,
            backgroundColor: Colors.BACK,
            borderColor: Colors.BROWN,
            padding: 10,
            height: 40,
            borderRadius: 100,
          }}
          onChangeText={setSearchText}
        />
        <CustomBotton
          onPress={() => handleSubmit()}
          title="Search"
          backColor={Colors.GREEN}
          titleColor={Colors.WHITE}
        />

        <View></View>
      </View>
    );
  };

  return (
    <View style={screenStyles.container}>
      <FlatList
        ListHeaderComponent={ListHeaderComponent}
        data={characterList}
        renderItem={({item}) => <SearchItem item={item} />}
      />
    </View>
  );
}
