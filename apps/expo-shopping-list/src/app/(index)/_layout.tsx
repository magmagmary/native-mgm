import { Stack } from 'expo-router';
import React from 'react';
import { screenOptions } from '../../constants/screenOptions';

const AppRouter = () => {
  return (
    <Stack screenOptions={screenOptions}>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
    </Stack>
  );
};

export default AppRouter;
