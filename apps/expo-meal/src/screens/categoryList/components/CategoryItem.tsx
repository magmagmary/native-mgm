// eslint-disable-next-line @nx/enforce-module-boundaries
import type { Category } from 'apps/expo-meal/src/types/types';
import React from 'react';
import { Pressable, View, Text } from 'react-native';

const CategoryItem = ({ category }: { category: Category }) => {
  return (
    <View
      className="flex-1 h-36 shadow-red-300 rounded-md m-4 shadow-lg"
      style={{ backgroundColor: category.color }}
    >
      <Pressable className="flex-1 flex items-center justify-center">
        <Text className="text-xl"> {category.title}</Text>
      </Pressable>
    </View>
  );
};

export default CategoryItem;
