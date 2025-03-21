import React, { useState } from 'react';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';
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
    <ScrollView className="w-[360px] p-4 flex-none">
      <KeyboardAvoidingView
        behavior={'position'}
        className="bg-primary rounded-md shadow-2xl p-4"
      >
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
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;
