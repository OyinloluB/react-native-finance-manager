import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SplashScreen } from "../screens/splash";
import { AccountNavigator } from "./AccountNavigator";

const AppStack = createStackNavigator();

export const AppStackNavigator = () => {
  return (
    <AppStack.Navigator headerMode="none">
      <AppStack.Screen
        name="Main"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <AppStack.Screen name="Account" component={AccountNavigator} />
    </AppStack.Navigator>
  );
};
