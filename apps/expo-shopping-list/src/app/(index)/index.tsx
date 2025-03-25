import React from 'react';
import Button from '../../components/button';
import { BodyScrollView } from '../../components/BodyScrollView';
import { useClerk } from '@clerk/clerk-expo';

const Home = () => {
  const { signOut } = useClerk();

  return (
    <BodyScrollView contentContainerStyle={{ padding: 16 }}>
      <Button onPress={signOut}>Sign Out</Button>
    </BodyScrollView>
  );
};

export default Home;
