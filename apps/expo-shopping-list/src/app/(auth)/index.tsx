import { isClerkAPIResponseError, useSignIn } from '@clerk/clerk-expo';
import { Link, useRouter } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import { ThemedText } from '../../components/themed-text';
import Button from '../../components/button';
import TextInput from '../../components/text-input';
import { BodyScrollView } from '../../components/BodyScrollView';
import type { ClerkAPIError } from '@clerk/types';

type SignInPayload = {
  email: string;
  password: string;
};

const SignIn = () => {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();
  const [data, setData] = React.useState({ email: '', password: '' });
  const [isSingingIn, setIsSigningIn] = React.useState(false);
  const [error, setError] = React.useState<ClerkAPIError[]>([]);

  const handleLogin = async () => {
    if (!isLoaded) return;
    setIsSigningIn(true);

    setError([]);
    try {
      const signInAttempt = await signIn.create({
        identifier: data.email,
        password: data.password,
      });

      if (signInAttempt?.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace('/');
      } else {
        console.error('Verification failed');
      }
    } catch (error) {
      if (isClerkAPIResponseError(error)) setError(error.errors);
    } finally {
      setIsSigningIn(false);
    }
  };

  return (
    <BodyScrollView contentContainerStyle={{ padding: 16 }}>
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
      <Button
        onPress={handleLogin}
        loading={isSingingIn}
        disabled={!data.email || !data.password || !isLoaded || isSingingIn}
      >
        SignIn
      </Button>

      <View
        style={{
          marginTop: 16,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 4,
        }}
      >
        <ThemedText type="subtitle">Don't have an account?</ThemedText>
        <Link href="/sign-up">
          <ThemedText type="link">Sign Up</ThemedText>
        </Link>
      </View>

      <View
        style={{
          marginTop: 16,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 4,
        }}
      >
        <ThemedText type="subtitle">Forget Password?</ThemedText>
        <Link href="/reset-password">
          <ThemedText type="link">Reset</ThemedText>
        </Link>
      </View>

      {error.map((error) => (
        <ThemedText key={error.longMessage} style={{ color: 'red' }}>
          {error.longMessage}
        </ThemedText>
      ))}
    </BodyScrollView>
  );
};

export type { SignInPayload };
export default SignIn;
