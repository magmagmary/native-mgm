import React from 'react';
import {
  View
} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { StatusBar } from 'expo-status-bar';

export const App = () => {
  return (
  <View className='w-screen h-screen '>
    <StartGameScreen/>
    <StatusBar style="auto" />
  </View>
  );
};


export default App;
