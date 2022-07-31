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
import laptopYellow from '../../assets/images/laptop_yellow';
import bag from '../../assets/images/bag';
import creditCard from '../../assets/images/credit_card';
import notification from '../../assets/images/notification_bell';
import Transactions from '../../components/card/transactions';

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
        {/* Transactions */}
        <Transactions type="home" data={transactionData} />
      </ScrollView>
      <StatusBar barStyle="dark-content" />
    </SafeArea>
  );
};

const transactionData = [
  {
    name: 'Adobe Illustrator',
    purpose: 'Subcription fee',
    amount: -32.0,
    xml: laptopYellow,
  },
  {
    name: 'Dribbble',
    purpose: 'Subcription fee',
    amount: -15.0,
    xml: laptopYellow,
  },
  {
    name: 'Sony Camera',
    purpose: 'Shopping fee',
    amount: -200.0,
    xml: bag,
  },
  {
    name: 'Paypal',
    purpose: 'Salary',
    amount: 32.0,
    xml: creditCard,
  },
];
