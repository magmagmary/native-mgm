import React, { useState } from 'react';
import {  View ,StyleSheet} from 'react-native';
import {Button, Input} from '@native-magmag/ui';

const StartGameScreen = () => {
  const [number, setNumber] = useState('');

  return (
    <View className='w-screen h-screen bg-white'>
      <View className='bg-primary mt-40 w-[360px] mx-auto rounded-md shadow-2xl p-8'>
        <Input value={number} onChangeText={setNumber} className='bg-transparent' placeholder='your number' maxLength={2} keyboardType='number-pad'/>
        <View className=' flex flex-row items-center justify-between  '>
          <Button title='Reset' onPress={() => undefined} />
          <Button title='Confirm' onPress={() => undefined}/>
        </View>
       </View>
    </View>
  )
}

export default StartGameScreen
