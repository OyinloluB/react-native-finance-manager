import React from 'react';
import { SvgXml } from 'react-native-svg';
import {
  SavingsContainer,
  Header,
  SectionName,
  SectionPrompt,
  SavingsItem,
  SavingsTextContent,
  SavingsName,
  SavingsAmount,
  SavingsProgressBar,
  SavingsProgressBarAfter,
} from './styles';
import chevronRight from '../../assets/images/chevron-right';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export const Savings = () => {
  return (
    <SavingsContainer>
      <Header>
        <SectionName>Savings</SectionName>
        <SectionPrompt>See all</SectionPrompt>
      </Header>
      <FlatList
        numColumns={2}
        data={savingsData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <SavingsItem>
            <SavingsTextContent>
              <View>
                <SavingsName>{item.name}</SavingsName>
                <SavingsAmount>{item.amount}</SavingsAmount>
              </View>
              <SvgXml xml={chevronRight} />
            </SavingsTextContent>
            <View>
              <SavingsProgressBar background={item.background} />
              <SavingsProgressBarAfter
                progressBarColor={item.progress}
              />
            </View>
          </SavingsItem>
        )}
      />
    </SavingsContainer>
  );
};

const savingsData = [
  {
    name: 'Iphone 13 Mini',
    amount: '$699',
    background: '#CEDFBC66',
    progress: '#D8E5C9',
  },
  {
    name: 'Macbook Pro M1',
    amount: '$1,499',
    background: '#F5E9D366',
    progress: '#F5E9D3',
  },
  {
    name: 'Car',
    amount: '$20,000',
    background: '#BFA2CA66',
    progress: '#BFA2CA',
  },
  {
    name: 'House',
    amount: '$30,500',
    background: '#E6B8D066',
    progress: '#E6B8D0',
  },
];
