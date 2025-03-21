import { Button } from '@native-magmag/ui';
import React, { useState } from 'react';
import { Modal, Text, View } from 'react-native';

const Min = 1;
const Max = 100;

const generateRandomBetween = (min: number, max: number, exclude: number) => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  }
  return randomNumber;
};

const GameScreen = ({ enteredNumber }: { enteredNumber: number }) => {
  const [guessedNumber, setGuessedNumber] = useState(
    generateRandomBetween(Min, Max, enteredNumber)
  );

  const hasFoundNumber = guessedNumber === enteredNumber;

  const updateGuessedNumber = (direction: 'lower' | 'greater') => {
    if (hasFoundNumber) return;

    if (
      (direction === 'lower' && guessedNumber < enteredNumber) ||
      (direction === 'greater' && guessedNumber > enteredNumber)
    ) {
      return alert("Don't lie!");
    }

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

  return (
    <View className="max-w-[360px] mx-auto">
      <Text className="text-primary border border-primary p-2 w-fit mx-auto mb-5">
        Guessed Number
      </Text>
      <Text className="text-primary border border-primary p-2 w-fit mx-auto mb-5">
        {guessedNumber}
      </Text>
      <View className="flex flex-row items-center justify-between gap-2">
        <Button
          title="+"
          onPress={() => updateGuessedNumber('greater')}
          disabled={hasFoundNumber}
        />
        <Button
          title="-"
          onPress={() => updateGuessedNumber('lower')}
          disabled={hasFoundNumber}
        />
      </View>
      {hasFoundNumber && (
        <Modal>
          <View className="bg-primary w-[360px] mx-auto rounded-md shadow-2xl p-4 h-auto">
            <Text className="text-white text-2xl text-center">
              The number is {guessedNumber}
            </Text>
          </View>
        </Modal>
      )}
      ;
    </View>
  );
};

export default GameScreen;
