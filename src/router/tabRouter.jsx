import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Characters from '../screen/characters';
import {CHARACTERS, EPISODES, LOCATOINS, SETTING} from '../utils/routes';
import Locations from '../screen/locations';
import Settings from '../screen/settings';
import Episodes from '../screen/episodes';
import TabIcon from '../components/router/tabIcon';
import {tabBarStyle} from '../styles/tabBarStyles';
import HeaderRight from '../components/router/headerRight';

const Tab = createBottomTabNavigator();

const TabNavigator = function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => (
          <TabIcon
            screenName={route.name}
            size={size}
            color={color}
            focused={focused}
          />
        ),
        headerStyle: tabBarStyle.headerStyle,
        tabBarStyle: tabBarStyle.tabBarStyle,
        headerRight: props => <HeaderRight />,
      })}>
      <Tab.Screen name={CHARACTERS} component={Characters} />
      <Tab.Screen name={LOCATOINS} component={Locations} />
      <Tab.Screen name={EPISODES} component={Episodes} />
      <Tab.Screen name={SETTING} component={Settings} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
