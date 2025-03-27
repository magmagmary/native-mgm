import { BodyScrollView } from 'apps/expo-shopping-list/src/components/BodyScrollView';
import Button from 'apps/expo-shopping-list/src/components/button';
import TextInput from 'apps/expo-shopping-list/src/components/text-input';
import {
  appleBlue,
  backgroundColors,
  emojies,
} from 'apps/expo-shopping-list/src/constants/colors';
import { Link, Stack } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useListCreation } from '../_context/ListCreationContext';

const create = () => {
  const [listName, setListName] = useState('');
  const [listDescription, setListDescription] = useState('');
  const { selectedColor, selectedEmoji, setSelectedColor, setSelectedEmoji } =
    useListCreation();

  const handleCreateList = () => {};
  const handleCreateTestLists = () => {};

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setSelectedEmoji(emojies[Math.floor(Math.random() * emojies.length)]);
    setSelectedColor(
      backgroundColors[Math.floor(Math.random() * backgroundColors.length)]
    );

    return () => {
      setSelectedColor('');
      setSelectedEmoji('');
    };
  }, [emojies, backgroundColors]);

  return (
    <>
      <Stack.Screen
        options={{ headerTitle: 'New List', headerLargeTitle: false }}
      />
      <BodyScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Grocery Essentials"
            returnKeyType="done"
            variant="ghost"
            size="lg"
            autoFocus
            inputStyle={styles.titleInput}
            containerStyle={styles.titleInputContainer}
            onSubmitEditing={handleCreateList}
            value={listName}
            onChangeText={setListName}
          />
          <Link
            href={{ pathname: '/emoji-picker' }}
            style={[styles.emojiButton, { borderColor: selectedColor }]}
          >
            <View style={styles.emojiContainer}>
              <Text>{selectedEmoji}</Text>
            </View>
          </Link>
          <Link
            href={{ pathname: '/color-picker' }}
            style={[styles.colorButton, { borderColor: selectedColor }]}
          >
            <View style={styles.colorContainer}>
              <View
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 100,
                  backgroundColor: selectedColor,
                }}
              />
            </View>
          </Link>
        </View>
        <TextInput
          placeholder="Description (optional)"
          value={listDescription}
          onChangeText={setListDescription}
          onSubmitEditing={handleCreateList}
          returnKeyType="done"
          variant="ghost"
          inputStyle={styles.descriptionInput}
        />
        <Button
          onPress={handleCreateList}
          disabled={!listName}
          variant="ghost"
          textStyle={styles.createButtonText}
        >
          Create list
        </Button>
        <Button
          onPress={handleCreateTestLists}
          variant="ghost"
          textStyle={styles.createButtonText}
        >
          Create 10 test lists
        </Button>
      </BodyScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    padding: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  titleInput: {
    fontWeight: '600',
    fontSize: 28,
    padding: 0,
  },
  titleInputContainer: {
    flexGrow: 1,
    flexShrink: 1,
    maxWidth: 'auto',
    marginBottom: 0,
  },
  emojiButton: {
    padding: 1,
    borderWidth: 3,
    borderRadius: 100,
  },
  emojiContainer: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  descriptionInput: {
    padding: 0,
  },
  createButtonText: {
    color: appleBlue,
    fontWeight: 'normal',
  },
  colorButton: {
    padding: 1,
    borderWidth: 3,
    borderRadius: 100,
  },
  colorContainer: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default create;
