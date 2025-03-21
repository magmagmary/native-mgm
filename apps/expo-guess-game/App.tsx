import React, { useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { primary_color, warning_color } from '@native-magmag/ui';
import { useAppFont } from '@native-magmag/utils';
import AppLoading from 'expo-app-loading';
import GameScreen from './screens/GameScreen';

export const App = () => {
  const [enteredNumber, setEnteredNumber] = useState(0);

  // if using expo for the font
  const [fontsLoaded] = useAppFont();

  if (!fontsLoaded) return <AppLoading />;

  const handleReset = () => {
    setEnteredNumber(0);
  };

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
        <SafeAreaView className="font-app flex-1 items-center justify-center">
          {enteredNumber ? (
            <GameScreen enteredNumber={enteredNumber} onReset={handleReset} />
          ) : (
            <StartGameScreen setEnteredNumber={setEnteredNumber} />
          )}
        </SafeAreaView>
      </ImageBackground>
      <StatusBar style="light" />
    </>
  );
};

export default App;
