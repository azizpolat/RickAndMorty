import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CHARACTERDETAIL,
  CHARACTERFİLTER,
  CHARACTERSEARCH,
  TABNAVIGATOR,
} from '../utils/routes';
import TabNavigator from './tabRouter';
import CharactersDetail from '../screen/characters/CharacterDetail';
import CharactersFilter from '../screen/characters/CharacterFilter';
import CharactersSearch from '../screen/characters/CharacterSearch';
import Colors from '../theme/colors';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.BACK,
        },
        headerBackTitle: 'Back',
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={TABNAVIGATOR}
        component={TabNavigator}
      />
      <Stack.Screen name={CHARACTERDETAIL} component={CharactersDetail} />
      <Stack.Screen name={CHARACTERFİLTER} component={CharactersFilter} />
      <Stack.Screen name={CHARACTERSEARCH} component={CharactersSearch} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
