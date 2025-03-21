import { Button } from '@native-magmag/ui';
import React, { useState } from 'react';
import { Modal, SafeAreaView, Text, View } from 'react-native';

const Min = 1;
const Max = 100;

const generateRandomBetween = (min: number, max: number, exclude: number) => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  }
  return randomNumber;
};

const GameScreen = ({
  enteredNumber,
  onReset,
}: {
  enteredNumber: number;
  onReset: () => void;
}) => {
  const [guessedNumber, setGuessedNumber] = useState(
    generateRandomBetween(Min, Max, enteredNumber)
  );
  const [rounds, setRounds] = useState(0);

  const hasFoundNumber = guessedNumber === enteredNumber;

  const updateGuessedNumber = (direction: 'lower' | 'greater') => {
    if (hasFoundNumber) return;

    if (
      (direction === 'lower' && guessedNumber < enteredNumber) ||
      (direction === 'greater' && guessedNumber > enteredNumber)
    ) {
      return alert("Don't lie!");
    }

    setRounds((prev) => prev + 1);

    if (direction === 'lower') {
      setGuessedNumber(
        generateRandomBetween(Min, guessedNumber, guessedNumber)
      );
    } else {
      setGuessedNumber(
        generateRandomBetween(guessedNumber, Max, guessedNumber)
      );
    }
  };

  const handleReset = () => {
    setRounds(0);
    onReset();
  };

  return (
    <View className="w-full md:w-[360px] mx-auto bg-primary p-4 rounded-md shadow-2xl">
      <Text className="w-fit mx-auto mb-5">Guessed Number</Text>
      <Text className=" w-fit mx-auto mb-5 border border-slate-800 p-2">
        {guessedNumber}
      </Text>
      <View className="flex flex-row items-center justify-between gap-2">
        <Button
          title="+"
          onPress={() => updateGuessedNumber('greater')}
          disabled={hasFoundNumber}
          className="flex-1 text-2xl"
        />
        <Button
          title="-"
          onPress={() => updateGuessedNumber('lower')}
          disabled={hasFoundNumber}
          className="flex-1 text-2xl"
        />
      </View>
      <Modal animationType="slide" visible={hasFoundNumber}>
        <SafeAreaView>
          <View className="bg-primary p-4 h-full flex flex-col items-center justify-center">
            <Text className="text-white text-2xl text-center mb-4">
              The number is {guessedNumber}
            </Text>
            <Text className="text-white text-2xl text-center">
              You made it after {rounds} rounds!
            </Text>
            <Button title="Reset The game" onPress={handleReset} />
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export default GameScreen;
