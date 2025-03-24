// eslint-disable-next-line @nx/enforce-module-boundaries
import type { Meal } from 'apps/expo-meal/src/types/types';
import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';

const MealItem = ({ meal }: { meal: Meal }) => {
  return (
    <View className="flex-1 shadow-red-300 rounded-md m-4 shadow-lg max-w-[50%] overflow-hidden bg-white">
      <Pressable className="flex-1">
        <Image source={{ uri: meal.imageUrl }} className="w-full h-36" />
        <View className="p-2">
          <Text className="text-black text-2xl mb-2">{meal.title}</Text>
          <Text className="text-black">{meal.duration}m</Text>
          <Text className="text-black">{meal.complexity.toUpperCase()}</Text>
          <Text className="text-black">{meal.affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;
