import React from 'react';
import Button from '../../components/button';
import { BodyScrollView } from '../../components/BodyScrollView';
import { useClerk } from '@clerk/clerk-expo';
import { Stack } from 'expo-router';
import { Pressable, View } from 'react-native';
import { IconSymbol } from '../../components/IconSymbol';
import { appleBlue } from '../../constants/colors';

const Home = () => {
  const { signOut } = useClerk();

  const rightHeader = () => (
    <View>
      <Pressable>
        <IconSymbol name="plus" color={appleBlue} />
      </Pressable>
    </View>
  );
  const leftHeader = () => (
    <View>
      <Pressable>
        <IconSymbol name="gear" color={appleBlue} />
      </Pressable>
    </View>
  );

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Home',
          headerRight: rightHeader,
          headerLeft: leftHeader,
        }}
      />
      <BodyScrollView contentContainerStyle={{ padding: 16 }}>
        <Button onPress={signOut}>Sign Out</Button>
      </BodyScrollView>
    </>
  );
};

export default Home;
