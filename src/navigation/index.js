import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppStackNavigator } from './AppStackNavigator';

export const Navigation = () => {
  return (
    <NavigationContainer>
      <AppStackNavigator />
    </NavigationContainer>
  );
};
