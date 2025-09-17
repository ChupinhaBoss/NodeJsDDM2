import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/Home';
import Megas from '../components/Megas';
import Pedras from '../components/Pedras';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Megas" component={Megas} />
      <Stack.Screen name="Pedras" component={Pedras} />
    </Stack.Navigator>
  );
}
