import React from 'react';
import { SvgXml } from 'react-native-svg';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import home from '../assets/images/home';
import wallet from '../assets/images/wallet';
import chart from '../assets/images/chart';
import user from '../assets/images/user';

import Wallet from '../screens/wallet';
import Savings from '../screens/savings';
import Profile from '../screens/profile';
import { Home } from '../screens/home';

const Tab = createBottomTabNavigator();

const tab_icons = {
  Home: home,
  Wallet: wallet,
  Savings: chart,
  Profile: user,
};

const createScreenOptions = ({ route }) => {
  return {
    tabBarIcon: () => (
      <SvgXml xml={tab_icons[route.name]} width={20} height={20} />
    ),
  };
};

export const AccountNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showLabel: false,
        style: {
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 25,
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
