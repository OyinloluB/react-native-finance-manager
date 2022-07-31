import React from 'react';
import { SvgXml } from 'react-native-svg';
import { ScrollView } from 'react-native-virtualized-view';
import menu from '../../assets/images/menu';
import CreditCards from '../../components/card/credit-cards';
import Transactions from '../../components/card/transactions';
import laptopYellow from '../../assets/images/laptop_yellow';
import bag from '../../assets/images/bag';
import creditCard from '../../assets/images/credit_card';
import {
  SafeArea,
  GreetingsContainer,
  ProfileDetails,
  ProfilePicture,
  ScreenGreeting,
  Greeting,
  Header,
  SectionName,
  SectionPrompt,
  SavingsSection,
  Saving,
  SavingText,
  SavingsProgressBar,
  SavingsProgressBarAfter,
  SavingContent,
  SavingContentWrapper,
} from './styles';
import saving_icon from '../../assets/images/saving_icon';
import { Text, View } from 'react-native';
import phone from '../../assets/images/phone';
import { FlatList } from 'react-native-gesture-handler';
import key from '../../assets/images/key';
import laptop_blue from '../../assets/images/laptop_blue';
import savings_home from '../../assets/images/savings_home';

const Wallet = () => {
  return (
    <SafeArea>
      <ScrollView>
        {/* Greetings */}
        <GreetingsContainer>
          <ProfileDetails>
            <ProfilePicture />
          </ProfileDetails>
          <ScreenGreeting>
            <Greeting>Wallet</Greeting>
          </ScreenGreeting>
          <SvgXml xml={menu} />
        </GreetingsContainer>
        <CreditCards />
        {/* Transactions */}
        <Transactions type="wallet" data={transactionData} />
        <SavingsSection>
          <Header>
            <SectionName>Savings</SectionName>
            <SectionPrompt>See all</SectionPrompt>
          </Header>
          <View>
            <FlatList
              listKey={(item, index) => index.toString()}
              data={savingsData}
              renderItem={({ item }) => {
                return (
                  <Saving>
                    <SvgXml xml={item.xml} />
                    <SavingContentWrapper>
                      <SavingContent>
                        <SavingText>{item.name}</SavingText>
                        <SavingText>{item.amount}</SavingText>
                      </SavingContent>
                      <View>
                        <SavingsProgressBar />
                        <SavingsProgressBarAfter />
                      </View>
                    </SavingContentWrapper>
                  </Saving>
                );
              }}
            />
          </View>
        </SavingsSection>
      </ScrollView>
    </SafeArea>
  );
};

const transactionData = [
  {
    name: 'Dribbble',
    purpose: 'Subcription fee',
    amount: -15.0,
    xml: laptopYellow,
  },
  {
    name: 'House',
    purpose: 'Saving',
    amount: -50.0,
    xml: saving_icon,
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
    amount: -32.0,
    xml: creditCard,
  },
  {
    name: 'Car',
    purpose: 'Saving',
    amount: -40.0,
    xml: saving_icon,
  },
];

const savingsData = [
  {
    name: 'Iphone 13 Mini',
    amount: '$699.00',
    xml: phone,
  },
  {
    name: 'Macbook Pro M1',
    amount: '$1,499.00',
    xml: laptop_blue,
  },
  {
    name: 'House',
    amount: '$65,000.00',
    xml: savings_home,
  },
  {
    name: 'Car',
    amount: '$20,000.00',
    xml: key,
  },
];

export default Wallet;
