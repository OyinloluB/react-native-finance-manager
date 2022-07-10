import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Wallet from "../screens/wallet";
import Savings from "../screens/savings";
import Profile from "../screens/profile";
import { Home } from "../screens/home";

const Tab = createBottomTabNavigator();

const tab_icons = {
  Home: {
    uri: require("../assets/images/nav_home.png"),
  },
  Wallet: {
    uri: require("../assets/images/nav_wallet.png"),
  },
  Savings: { uri: require("../assets/images/nav_chart.png") },
  Profile: { uri: require("../assets/images/nav_user.png") },
};

const createScreenOptions = ({ route }) => {
  return {
    tabBarIcon: () => <Image source={tab_icons[route.name].uri} />,
  };
};

export const AccountNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
        showLabel: false,
        style: {
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 20,
          paddingBottom: 45,
        },
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Wallet" component={Wallet} />
      <Tab.Screen name="Savings" component={Savings} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
