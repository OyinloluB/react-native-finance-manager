import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SvgXml } from 'react-native-svg';
import add from '../../assets/images/add';
import card_logo from '../../assets/images/card_logo';
import {
  CardsContainer,
  AddCard,
  Card,
  CardTopWrapper,
  CardTopContent,
  TitleText,
  CardBalance,
  CardMidSection,
  CardNumber,
  CardBottom,
  UserDataTitle,
  UserDataValue,
  CardExp,
} from './styles';

const CreditCards = () => {
  return (
    <CardsContainer>
      <AddCard>
        <SvgXml xml={add} />
      </AddCard>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        data={cardData}
        renderItem={({ item }) => (
          <Card background={item.background}>
            <CardTopWrapper>
              <CardTopContent>
                <TitleText>Total Balance</TitleText>
                <CardBalance>{item.balance}</CardBalance>
              </CardTopContent>
              <SvgXml xml={card_logo} />
            </CardTopWrapper>
            <CardMidSection>
              <CardNumber>1234</CardNumber>
              <CardNumber>••••</CardNumber>
              <CardNumber>••••</CardNumber>
              <CardNumber>3456</CardNumber>
            </CardMidSection>
            <CardBottom>
              <View>
                <UserDataTitle>Name</UserDataTitle>
                <UserDataValue>Zarror Nibros</UserDataValue>
              </View>
              <View>
                <CardExp>Exp</CardExp>
                <UserDataValue>09/23</UserDataValue>
              </View>
            </CardBottom>
          </Card>
        )}
      />
    </CardsContainer>
  );
};

const cardData = [
  {
    balance: '$10,000.00',
    background: 'white',
  },
  {
    balance: '$15,000.40',
    background: '#FBE5A3',
  },
];

export default CreditCards;
