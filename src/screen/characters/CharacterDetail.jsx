import React, {useEffect} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getSingleCharacter} from '../../store/actions/characterActions';
import Spinner from '../../components/ui/spinner';
import screenStyles from '../../styles/screenStyles';
import {characterDetailStyle} from '../../styles/characterStyles';
import {statusTypes} from '../../utils/contanst';

const CharactersDetail = ({route}) => {
  const params = route?.params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleCharacter(params.characterID));
  }, []);

  const {singleCharacter, singleCharacterPendik} = useSelector(
    state => state.characters,
  );

  const formatDate = dateString => {
    const dateObject = new Date(dateString);
    return dateObject.toLocaleString('tr-TR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <View style={screenStyles.container}>
      {singleCharacterPendik ? (
        <Spinner />
      ) : (
        <ScrollView>
          <View style={characterDetailStyle.imageContainer}>
            <Image
              style={[
                characterDetailStyle.image,
                singleCharacter.status == statusTypes.ALIVE
                  ? characterDetailStyle.statusAliveContainer
                  : characterDetailStyle.statusDeadContainer,
              ]}
              source={{uri: singleCharacter.image}}
            />
            <View
              style={[
                singleCharacter.status == statusTypes.ALIVE
                  ? characterDetailStyle.aliveStatusContainer
                  : characterDetailStyle.deadStatusContainer,
              ]}>
              <Text style={characterDetailStyle.status}>
                {singleCharacter.status}
              </Text>
            </View>
          </View>
          <View style={characterDetailStyle.nameContainer}>
            <Text style={characterDetailStyle.name}>
              {singleCharacter.name}
            </Text>
          </View>
          <View style={characterDetailStyle.sectionContainer}>
            <Text style={characterDetailStyle.sectionTitle}>PROPERTİES</Text>
            <View style={characterDetailStyle.rowContainer}>
              <View style={characterDetailStyle.infoContainer}>
                <Text>Gender</Text>
              </View>
              <View style={characterDetailStyle.infoBox}>
                <Text style={characterDetailStyle.genderBox}>
                  {singleCharacter.gender}
                </Text>
              </View>
            </View>
          </View>

          <View style={characterDetailStyle.sectionContainer}>
            <View style={characterDetailStyle.rowContainer}>
              <View style={characterDetailStyle.infoContainer}>
                <Text>Species</Text>
              </View>
              <View style={characterDetailStyle.infoBox}>
                <Text style={characterDetailStyle.genderBox}>
                  {singleCharacter.species}
                </Text>
              </View>
            </View>
          </View>

          <View style={characterDetailStyle.sectionContainer}>
            <View style={characterDetailStyle.rowContainer}>
              <View style={characterDetailStyle.infoContainer}>
                <Text>Status</Text>
              </View>
              <View style={characterDetailStyle.infoBox}>
                <Text style={characterDetailStyle.genderBox}>
                  {singleCharacter.status}
                </Text>
              </View>
            </View>
          </View>

          <View style={characterDetailStyle.sectionContainer}>
            <Text style={characterDetailStyle.sectionTitle}>WHERE ABOUTS</Text>
            <View style={characterDetailStyle.rowContainer}>
              <View style={characterDetailStyle.infoContainer}>
                <Text>Origin</Text>
              </View>
              <View style={characterDetailStyle.infoBox}>
                <Text style={characterDetailStyle.genderBox}>
                  {singleCharacter?.origin?.name}
                </Text>
              </View>
            </View>
            <View style={characterDetailStyle.rowContainer}>
              <View style={characterDetailStyle.infoContainer}>
                <Text>Location</Text>
              </View>
              <View style={characterDetailStyle.infoBox}>
                <Text style={characterDetailStyle.genderBox}>
                  {singleCharacter?.location?.name}
                </Text>
              </View>
            </View>
          </View>

          <View style={characterDetailStyle.sectionContainer}>
            <Text style={characterDetailStyle.sectionTitle}>
              FEATURE CHAPTERS
            </Text>
            <View style={characterDetailStyle.rowContainer}>
              <View style={characterDetailStyle.infoContainer}>
                <Text>Create Date</Text>
              </View>
              <View style={characterDetailStyle.infoBox}>
                <Text style={characterDetailStyle.genderBox}>
                  {singleCharacter?.created
                    ? formatDate(singleCharacter.created)
                    : 'N/A'}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default CharactersDetail;
