import React from 'react';
import { SvgXml } from 'react-native-svg';
import {
  TotalBalanceContainer,
  TotalBalanceCard,
  CardPatternTop,
  CardPatternBottom,
  BalanceTitle,
  TotalBalance,
  WalletRoute,
  WalletRouteText,
  ArrowButton,
} from './styles';
import cardTopPattern from '../../assets/images/card_top_pattern';
import cardBottomPattern from '../../assets/images/card_bottom_pattern';
import arrowRightSmall from '../../assets/images/arrow_right_small';

export const Balance = ({ navigation }) => {
  return (
    <TotalBalanceContainer>
      <TotalBalanceCard>
        <CardPatternTop>
          <SvgXml xml={cardTopPattern} />
        </CardPatternTop>
        <BalanceTitle>Total Balance</BalanceTitle>
        <TotalBalance>$25,000.40</TotalBalance>
        <WalletRoute>
          <WalletRouteText>My Wallet</WalletRouteText>
          <ArrowButton
            onPress={() => {
              navigation.navigate('Wallet');
            }}
          >
            <SvgXml xml={arrowRightSmall} />
          </ArrowButton>
        </WalletRoute>
        <CardPatternBottom>
          <SvgXml xml={cardBottomPattern} />
        </CardPatternBottom>
      </TotalBalanceCard>
    </TotalBalanceContainer>
  );
};
