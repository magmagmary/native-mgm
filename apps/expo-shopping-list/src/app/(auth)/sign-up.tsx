import { useSignUp } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { BodyScrollView } from '../../components/BodyScrollView';
import { ThemedText } from '../../components/themed-text';
import TextInput from '../../components/text-input';
import { Button } from '../../components/button';
import type { ClerkAPIError } from '@clerk/types';

const Signup = () => {
  const { signUp, isLoaded, setActive } = useSignUp();
  const router = useRouter();
  const [data, setData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<ClerkAPIError[]>([]);
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState('');

  const handleSignUp = async () => {
    if (!isLoaded) return;
    setIsLoading(true);
    setErrors([]);

    try {
      await signUp?.create({
        emailAddress: data.email,
        password: data.password,
      });
      await signUp?.prepareEmailAddressVerification({
        strategy: 'email_code',
      });
      setPendingVerification(true);
    } catch (error) {
      setErrors(error.errors);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerify = async () => {
    if (!isLoaded) return;
    setIsLoading(true);
    setErrors([]);

    try {
      const signupAttempt = await signUp?.attemptEmailAddressVerification({
        code,
      });
      if (signupAttempt?.status === 'complete') {
        await setActive({ session: signupAttempt.createdSessionId });
        router.replace('/');
      } else {
        console.error('Verification failed');
      }
    } catch (error) {
      setErrors(error.errors);
    } finally {
      setIsLoading(false);
    }
  };

  if (pendingVerification)
    return (
      <BodyScrollView style={{ padding: 16 }}>
        <TextInput
          value={code}
          label="Verification Code"
          onChangeText={(value) => setCode(value)}
        />
        <Button
          onPress={handleVerify}
          loading={isLoading}
          disabled={!code || isLoading}
        >
          Verify
        </Button>
        {errors.map((error) => (
          <ThemedText key={error.longMessage} style={{ color: 'red' }}>
            {error.longMessage}
          </ThemedText>
        ))}
      </BodyScrollView>
    );

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
        onPress={handleSignUp}
        loading={isLoading}
        disabled={!data.email || !data.password || !isLoaded || isLoading}
      >
        Sign Up
      </Button>

      {errors.map((error) => (
        <ThemedText key={error.longMessage} style={{ color: 'red' }}>
          {error.longMessage}
        </ThemedText>
      ))}
    </BodyScrollView>
  );
};

export default Signup;
