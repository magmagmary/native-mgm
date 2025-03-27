import { useRoute } from '@react-navigation/native';
import { BodyScrollView } from 'apps/expo-shopping-list/src/components/BodyScrollView';
import Button from 'apps/expo-shopping-list/src/components/button';
import IconCircle from 'apps/expo-shopping-list/src/components/IconCircle';
import TextInput from 'apps/expo-shopping-list/src/components/text-input';
import { ThemedText } from 'apps/expo-shopping-list/src/components/themed-text';
import {
  backgroundColors,
  emojies,
} from 'apps/expo-shopping-list/src/constants/colors';
import { Href, useRouter } from 'expo-router';
import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

const isValidUUID = (id: string | null) => {
  if (!id) return false;
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(id);
};

const NewItem = () => {
  const [listId, setListId] = React.useState('');
  const isValidListId = useMemo(() => isValidUUID(listId), [listId]);
  const randomEmoji = useMemo(
    () => emojies[Math.floor(Math.random() * emojies.length)],
    []
  );
  const randomColor = useMemo(
    () => backgroundColors[Math.floor(Math.random() * backgroundColors.length)],
    []
  );
  const router = useRouter();

  const handleJoinShoppingList = (value: string) => {};

  const handleJoinList = () => {};

  const handleDismissTo = (screen: Href) => {
    if (router.canDismiss()) {
      router.dismiss();
      setTimeout(() => {
        router.push(screen);
      }, 100);
    }
  };

  return (
    <BodyScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
        <IconCircle
          size={60}
          emoji={randomEmoji}
          backgroundColor={randomColor}
        />
        <ThemedText type="title">Better Together</ThemedText>
        <ThemedText type="defaultSemiBold" style={styles.subTitle}>
          Create a shared shopping list with your friends and family in
          real-time.
        </ThemedText>
      </View>

      <View style={{ gap: 16, width: '100%' }}>
        <Button onPress={() => handleDismissTo('/list/new/create')}>
          Create new list
        </Button>

        <View style={styles.actionContainer}>
          <View style={styles.line} />
          <ThemedText style={styles.subTitle}>Or join existing</ThemedText>
          <View style={styles.line} />
        </View>
      </View>

      <View style={styles.joinSection}>
        <TextInput
          placeholder="Enter a list code"
          containerStyle={{ marginBottom: 0 }}
          value={listId}
          onChangeText={setListId}
          onSubmitEditing={(e) => handleJoinShoppingList(e.nativeEvent.text)}
        />
        <Button onPress={handleJoinList} disabled={!isValidListId}>
          Join list
        </Button>
        <Button
          variant="ghost"
          onPress={() => handleDismissTo('list/new/scan')}
        >
          Scan QR code
        </Button>
      </View>
    </BodyScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
    gap: 16,
    marginTop: 32,
  },
  subTitle: {
    color: 'gray',
    textAlign: 'center',
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'lightgray',
  },
  joinSection: {
    width: '100%',
    padding: 16,
    gap: 16,
  },
});

export default NewItem;
