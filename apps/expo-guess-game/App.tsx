import React, { useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { primary_color, warning_color } from '@native-magmag/ui';
import GameScreen from './screens/GameScreen';

export const App = () => {
  const [enteredNumber, setEnteredNumber] = useState(0);

  return (
    <>
      <LinearGradient
        className="w-screen h-screen p-4"
        colors={[primary_color, warning_color]}
        style={StyleSheet.absoluteFill}
      />
      <ImageBackground
        className="p-5 w-full h-full"
        source={require('./assets/dice.jpg')}
        resizeMode="cover"
        imageClassName="opacity-70 w-full"
        imageStyle={{ opacity: 0.7 }}
      >
        <SafeAreaView>
          {enteredNumber ? (
            <GameScreen enteredNumber={enteredNumber} />
          ) : (
            <StartGameScreen setEnteredNumber={setEnteredNumber} />
          )}
        </SafeAreaView>
      </ImageBackground>
      <StatusBar style="auto" />
    </>
  );
};

export default App;
