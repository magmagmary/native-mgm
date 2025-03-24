import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useLayoutEffect } from 'react';
import { CATEGORIES, MEALS } from '../../constatnts/dummy-data';
import { FlatList } from 'react-native';
import MealItem from './components/MealItem';
import useViewPort from '../../hooks/useViewPort';

const MealsOverViewScree = () => {
  const { params } = useRoute();
  const navigation = useNavigation();
  const { categoryId } = params;
  const viewPort = useViewPort();
  const categoryTitle = CATEGORIES.find(
    (category) => category.id === categoryId
  )?.title;

  useLayoutEffect(() => {
    navigation.setOptions({ title: `${categoryTitle} Meals` });
  }, [navigation, categoryTitle]);

  const meals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  return (
    <FlatList
      key={viewPort}
      keyExtractor={(item) => item.id}
      data={meals}
      renderItem={({ item }) => <MealItem meal={item} />}
      numColumns={viewPort === 'mobile' ? 2 : 3}
    />
  );
};

export default MealsOverViewScree;
