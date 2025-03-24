import React from 'react';
import { StatusBar } from 'react-native';
import CategoriesListScreen from './src/screens/categoryList/CategoriesListScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Categories" component={CategoriesListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
