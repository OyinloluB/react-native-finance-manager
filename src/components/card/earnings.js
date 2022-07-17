import React from 'react';
import { View, FlatList } from 'react-native';
import {
  EarningsContainer,
  Header,
  SectionName,
  SectionPrompt,
  Earning,
  Icon,
  EarningName,
  EarningAmount,
  IconText,
} from './styles';

export const Earnings = () => {
  return (
    <EarningsContainer>
      <Header>
        <SectionName>Earnings</SectionName>
        <SectionPrompt>See all</SectionPrompt>
      </Header>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={earningsData}
        renderItem={({ item }) => (
          <Earning background={item.background}>
            <Icon>
              <IconText>{item.icon}</IconText>
            </Icon>
            <View>
              <EarningName>{item.name}</EarningName>
              <EarningAmount>{item.Amount}</EarningAmount>
            </View>
          </Earning>
        )}
      />
    </EarningsContainer>
  );
};

const earningsData = [
  {
    name: 'Upwork',
    icon: 'U',
    Amount: '$ 3,000',
    background: '#D8E5C9',
  },
  {
    name: 'Freepik',
    icon: 'F',
    Amount: '$ 3,000',
    background: '#F5E9D3',
  },
  {
    name: 'Envato',
    icon: 'E',
    Amount: '$ 2,000',
    background: '#E6B8D0',
  },
  {
    name: 'Fiverr',
    icon: 'F',
    Amount: '$ 2,000',
    background: '#BFA2CA',
  },
];