import { BodyScrollView } from 'apps/expo-shopping-list/src/components/BodyScrollView';
import Button from 'apps/expo-shopping-list/src/components/button';
import TextInput from 'apps/expo-shopping-list/src/components/text-input';
import { ThemedText } from 'apps/expo-shopping-list/src/components/themed-text';
import { appleBlue } from 'apps/expo-shopping-list/src/constants/colors';
import { Link, Stack } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const create = () => {
  const [listName, setListName] = useState('');
  const [listDescription, setListDescription] = useState('');

  const handleCreateList = () => {};
  const handleCreateTestLists = () => {};
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
            style={[styles.emojiButton, { borderColor: 'blue' }]}
          >
            <View style={styles.emojiContainer}>
              <Text>{'🐒'}</Text>
            </View>
          </Link>
          <Link
            href={{ pathname: '/color-picker' }}
            style={[styles.colorButton, { borderColor: 'blue' }]}
          >
            <View style={styles.colorContainer}>
              <View
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 100,
                  backgroundColor: 'blue',
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
