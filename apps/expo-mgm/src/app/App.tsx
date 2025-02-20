/* eslint-disable jsx-a11y/accessible-emoji */
import { Button } from '@native-magmag/ui';
import React, { useRef } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

export const App = () => {
  const scrollViewRef = useRef<null | ScrollView>(null);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
      >

        <ScrollView
          ref={(ref) => {
            scrollViewRef.current = ref;
          }}
          contentInsetAdjustmentBehavior="automatic"
        >
          <View  >
            <Text className='text-red-500'>Hello there,</Text>
            <Text
              testID="heading"
            >
              Welcome ExpoMgm 👋
            </Text>
            <Button title='hi' />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};


export default App;
