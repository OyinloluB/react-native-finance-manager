import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { SvgXml } from 'react-native-svg';
import filter from '../../assets/images/filter';
import {
  TransactionsContainer,
  Header,
  SectionName,
  SectionPrompt,
  SubHeader,
  TransactionsWrapper,
  Transaction,
  TransactionContentWrapper,
  TransactionContent,
  TransactionName,
  TransactionPurpose,
  TransactionAmount,
} from './styles';

const Transactions = ({ type, data }) => {
  const isNegative = (num) => {
    if (Math.sign(num) === -1) {
      return true;
    }

    return false;
  };

  return (
    <TransactionsContainer>
      <Header>
        <SectionName>Transactions</SectionName>
        {type === 'wallet' ? (
          <SvgXml xml={filter} />
        ) : (
          <SectionPrompt>See all</SectionPrompt>
        )}
      </Header>
      {type !== 'wallet' && <SubHeader>Today</SubHeader>}
      <TransactionsWrapper>
        <FlatList
          data={data}
          listKey={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <Transaction>
                <TransactionContentWrapper>
                  <SvgXml xml={item.xml} />
                  <TransactionContent>
                    <TransactionName>{item.name}</TransactionName>
                    <TransactionPurpose>
                      {item.purpose}
                    </TransactionPurpose>
                  </TransactionContent>
                </TransactionContentWrapper>
                <TransactionAmount
                  isNegative={isNegative(item.amount)}
                >
                  {isNegative(item.amount)
                    ? `-$${Math.abs(item.amount)}.00`
                    : `+$${item.amount}.00`}
                </TransactionAmount>
              </Transaction>
            );
          }}
        />
      </TransactionsWrapper>
    </TransactionsContainer>
  );
};

export default Transactions;
