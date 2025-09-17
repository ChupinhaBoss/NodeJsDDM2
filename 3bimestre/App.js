import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import styles from './assets/css/styles.js';

import Home from './components/Home';
import Megas from './components/Megas';
import Pedras from './components/Pedras';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#eb7515',
          tabBarInactiveTintColor: '#f7f9fc',
          tabBarStyle: {
            backgroundColor: '#201030',
            borderTopWidth: 0,
            paddingBottom: 5,
            paddingTop: 5,
            height: 60,
          },
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Megas') {
              iconName = 'flame';
            } else if (route.name === 'Pedras') {
              iconName = 'diamond';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Megas" component={Megas} />
        <Tab.Screen name="Pedras" component={Pedras} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
