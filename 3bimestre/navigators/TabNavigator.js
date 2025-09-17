import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackerNavigator';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeTab" component={StackNavigator} options={{ title: 'Home' }} />
      <Tab.Screen name="Assunto" component={require('../components/Assunto').default} />
    </Tab.Navigator>
  );
}
