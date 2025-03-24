import React from 'react';
import { FlatList } from 'react-native';
import type { Category } from '../../types/types';
import CategoryItem from './components/CategoryItem';
import { CATEGORIES } from '../../constatnts/dummy-data';
import useViewPort from '../../hooks/useViewPort';

const CategoriesListScreen = () => {
  const viewPort = useViewPort();

  return (
    <FlatList
      key={viewPort}
      data={CATEGORIES}
      keyExtractor={(item: Category) => item.id}
      renderItem={({ item }: { item: Category }) => {
        return <CategoryItem category={item} />;
      }}
      numColumns={viewPort === 'mobile' ? 2 : 3}
    />
  );
};

export default CategoriesListScreen;
