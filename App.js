import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Inicio from './pantallas/Inicio';
import Meteoros from './pantallas/Meteoros';
import Eei from './pantallas/Eei'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName='Inicio' screenOptions={{headerShown:false}}>
        <Stack.Screen name='Inicio' component={Inicio}/>
        <Stack.Screen name='Meteoro' component={Meteoros}/>
        <Stack.Screen name='EEI' component={Eei}/>
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});