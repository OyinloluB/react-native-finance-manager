import React from 'react';
import { StatusBar } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { ScrollView } from 'react-native-virtualized-view';
import {
  SafeArea,
  GreetingsContainer,
  ProfileDetails,
  ProfilePicture,
  ProfileGreeting,
  UserName,
  Greeting,
} from './styles';
import {
  Balance,
  Expenses,
  Earnings,
  Savings,
} from '../../components/card';
import notification from '../../assets/images/notification_bell';

export const Home = ({ navigation }) => {
  return (
    <SafeArea>
      <ScrollView>
        {/* Greetings */}
        <GreetingsContainer>
          <ProfileDetails>
            <ProfilePicture />
            <ProfileGreeting>
              <Greeting>Good morning!</Greeting>
              <UserName>Zarror Nibros</UserName>
            </ProfileGreeting>
          </ProfileDetails>
          <SvgXml xml={notification} />
        </GreetingsContainer>
        {/* Total Balance */}
        <Balance navigation={navigation} />
        {/* Income/Outcome */}
        <Expenses />
        {/* Earnings */}
        <Earnings />
        {/* Savings */}
        <Savings />
      </ScrollView>
      <StatusBar barStyle="dark-content" />
    </SafeArea>
  );
};
