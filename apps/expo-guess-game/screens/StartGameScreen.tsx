import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Input } from '@native-magmag/ui';

const StartGameScreen = ({
  setEnteredNumber,
}: {
  setEnteredNumber: (s: number) => void;
}) => {
  const [number, setNumber] = useState('');

  const handleConfirm = () => {
    const parsedNumber = +number;
    console.log(parsedNumber);

    if (parsedNumber <= 0 || parsedNumber > 99) {
      return alert('Invalid number! Number has to be between 1 and 99.');
    }

    setEnteredNumber(parsedNumber);
  };

  return (
    <View className="bg-primary w-[360px] mx-auto rounded-md shadow-2xl p-4 h-auto">
      <Input
        value={number}
        onChangeText={setNumber}
        className="bg-transparent  mx-auto border-b border-b-yellow-300 rounded-none mb-5 px-2"
        maxLength={2}
        keyboardType="number-pad"
      />
      <View className=" flex flex-row items-center justify-between  ">
        <Button
          title="Reset"
          onPress={() => setNumber('')}
          variant="secondary"
          className="flex-1"
        />
        <Button title="Confirm" onPress={handleConfirm} className="flex-1" />
      </View>
    </View>
  );
};

export default StartGameScreen;
