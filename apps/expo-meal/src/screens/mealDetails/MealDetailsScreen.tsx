import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { MEALS } from '../../constatnts/dummy-data';
import { View, Image, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const MealDetailsScreen = () => {
  const { params } = useRoute();
  const navigation = useNavigation();
  const { mealId = '' } = params;

  const meal = MEALS.find((meal) => meal.id === mealId);

  if (!meal) return null;

  useEffect(() => {
    navigation.setOptions({
      title: meal?.title,
      headerRight: () => (
        <MaterialIcons
          name="favorite"
          size={24}
          color="black"
          onPress={() => alert('pressed')}
        />
      ),
    });
  }, [meal, navigation]);

  return (
    <View>
      <Image source={{ uri: meal.imageUrl }} className="w-full h-36" />
      <View className="p-2">
        <Text className="text-black text-2xl mb-2">{meal.title}</Text>
        <Text className="text-black">{meal.duration}m</Text>
        <Text className="text-black">{meal.complexity.toUpperCase()}</Text>
        <Text className="text-black">{meal.affordability.toUpperCase()}</Text>
      </View>
    </View>
  );
};

export default MealDetailsScreen;
