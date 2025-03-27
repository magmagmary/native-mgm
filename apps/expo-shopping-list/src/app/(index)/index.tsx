import React from 'react';
import Button from '../../components/button';
import { BodyScrollView } from '../../components/BodyScrollView';
import { useClerk } from '@clerk/clerk-expo';
import { Stack, useRouter } from 'expo-router';
import { Pressable, View } from 'react-native';
import { IconSymbol } from '../../components/IconSymbol';
import { appleBlue } from '../../constants/colors';

const Home = () => {
  const { signOut } = useClerk();
  const router = useRouter();

  const rightHeader = () => (
    <View>
      <Pressable onPress={() => router.push('/list/new')}>
        <IconSymbol name="plus" color={appleBlue} />
      </Pressable>
    </View>
  );

  const leftHeader = () => (
    <View>
      <Pressable onPress={() => router.push('/profile')}>
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
