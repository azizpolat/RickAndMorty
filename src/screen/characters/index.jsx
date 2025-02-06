import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getCharacterList} from '../../store/actions/characterActions';
import Spinner from '../../components/ui/spinner';
import screenStyles from '../../styles/screenStyles';
import CharacterCard from '../../components/charcters/CharacterCard';

const Characters = () => {
  const dispatch = useDispatch();
  const {params, characterList, pending} = useSelector(
    state => state.characters,
  );

  useEffect(() => {
    dispatch(getCharacterList(params));
  }, [params]);
  return (
    <View style={screenStyles.container}>
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          data={characterList}
          renderItem={({item}) => <CharacterCard item={item} />}
        />
      )}
    </View>
  );
};

export default Characters;
