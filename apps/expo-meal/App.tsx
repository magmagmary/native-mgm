import React from 'react';
import { StatusBar } from 'react-native';
import CategoriesListScreen from './src/screens/categoryList/CategoriesListScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverViewScree from './src/screens/mealsOverView/MealsOverViewScree';
import { primary_color } from '@native-magmag/ui';
import useViewPort from './src/hooks/useViewPort';

const Stack = createNativeStackNavigator();

export const App = () => {
  const viewPort = useViewPort();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Categories"
            component={CategoriesListScreen}
            options={{
              title: 'Meal Categories',
              headerStyle: {
                backgroundColor: primary_color,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerShown: viewPort !== 'desktop',
            }}
          />
          <Stack.Screen
            name="Meals"
            component={MealsOverViewScree}
            options={({ route }) => ({
              // title: `${route?.params?.categoryId} Meals`,
              headerStyle: {
                backgroundColor: primary_color,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerBackTitle: 'Back',
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
