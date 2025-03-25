import { useSignIn } from '@clerk/clerk-expo';
import { Link, useRouter } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import { ThemedText } from '../../components/themed-text';
import Button from '../../components/button';
import TextInput from '../../components/text-input';

type SignInPayload = {
  email: string;
  password: string;
};

const SignIn = () => {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();
  const [data, setData] = React.useState({ email: '', password: '' });

  return (
    <View>
      <ThemedText type="title">Sign In</ThemedText>
      <Link href="/sign-up">Sign Up</Link>
      <TextInput
        value={data.email}
        label="Email"
        onChangeText={(value) => setData((prev) => ({ ...prev, email: value }))}
      />
      <TextInput
        value={data.password}
        label="Password"
        onChangeText={(value) =>
          setData((prev) => ({ ...prev, password: value }))
        }
      />
      <Button>SignIn</Button>
    </View>
  );
};

export default SignIn;
