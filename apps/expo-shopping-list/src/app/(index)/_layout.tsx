import { Redirect, Stack, useRouter } from 'expo-router';
import React from 'react';
import { screenOptions } from '../../constants/screenOptions';
import Button from '../../components/button';
import { useUser } from '@clerk/clerk-expo';
import { ListCreationProvider } from './list/_context/ListCreationContext';

const AppRouter = () => {
  const router = useRouter();
  const user = useUser();

  if (!user) {
    return <Redirect href="/(auth)" />;
  }

  return (
    <ListCreationProvider>
      <Stack screenOptions={screenOptions}>
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen
          name="list/new/index"
          options={{
            presentation: 'formSheet',
            sheetGrabberVisible: true,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="list/new/scan"
          options={{
            presentation: 'fullScreenModal',
            headerLargeTitle: false,
            headerTitle: 'Scan QR code',
            headerLeft: () => (
              <Button variant="ghost" onPress={() => router.back()}>
                Back
              </Button>
            ),
          }}
        />
        <Stack.Screen
          name="profile"
          options={{
            presentation: 'formSheet',
            sheetAllowedDetents: [0.75, 1],
            sheetGrabberVisible: true,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="emoji-picker"
          options={{
            presentation: 'formSheet',
            headerLargeTitle: false,
            headerTitle: 'Choose an emoji',
            sheetAllowedDetents: [0.5, 0.75, 1],
            sheetGrabberVisible: true,
          }}
        />
        <Stack.Screen
          name="color-picker"
          options={{
            presentation: 'formSheet',
            headerLargeTitle: false,
            headerTitle: 'Choose a color',
            sheetAllowedDetents: [0.5, 0.75, 1],
            sheetGrabberVisible: true,
          }}
        />
      </Stack>
    </ListCreationProvider>
  );
};

export default AppRouter;
