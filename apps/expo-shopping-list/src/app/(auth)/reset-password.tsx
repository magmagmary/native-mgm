import { isClerkAPIResponseError, useSignIn } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import Button from '../../components/button';
import { ThemedText } from '../../components/themed-text';
import { BodyScrollView } from '../../components/BodyScrollView';
import TextInput from '../../components/text-input';
import type { ClerkAPIError } from '@clerk/types';

const ResetPassword = () => {
  const { signIn, isLoaded, setActive } = useSignIn();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<ClerkAPIError[]>([]);
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState('');

  const handleReset = async () => {
    if (!isLoaded) return;
    setIsLoading(true);
    setErrors([]);

    try {
      await signIn?.create({
        strategy: 'reset_password_email_code',
        identifier: email,
      });

      setPendingVerification(true);
    } catch (err) {
      if (isClerkAPIResponseError(err)) setErrors(err.errors);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerify = async () => {
    if (!isLoaded) return;
    setIsLoading(true);
    setErrors([]);

    try {
      const signInAttempt = await signIn.attemptFirstFactor({
        strategy: 'reset_password_email_code',
        code,
        password,
      });
      if (signInAttempt?.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace('/');
      } else {
        console.error('Verification failed');
      }
    } catch (err) {
      if (isClerkAPIResponseError(err)) setErrors(err.errors);
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
          onChangeText={setCode}
        />
        <TextInput
          value={password}
          label="New Password"
          onChangeText={setPassword}
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
      <TextInput value={email} label="Email" onChangeText={setEmail} />
      <Button
        onPress={handleReset}
        loading={isLoading}
        disabled={!email || !isLoaded || isLoading}
      >
        Continue
      </Button>

      {errors.map((error) => (
        <ThemedText key={error.longMessage} style={{ color: 'red' }}>
          {error.longMessage}
        </ThemedText>
      ))}
    </BodyScrollView>
  );
};

export default ResetPassword;
