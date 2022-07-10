import React from "react";
import { Image } from "react-native";
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
} from "./styles";

export const Balance = ({ navigation }) => {
  return (
    <TotalBalanceContainer>
      <TotalBalanceCard>
        <CardPatternTop
          source={require("../../assets/images/card_top_pattern.png")}
        />
        <BalanceTitle>Total Balance</BalanceTitle>
        <TotalBalance>$25,000.40</TotalBalance>
        <WalletRoute>
          <WalletRouteText>My Wallet</WalletRouteText>
          <ArrowButton
            onPress={() => {
              navigation.navigate("Wallet");
            }}
          >
            <Image
              source={require("../../assets/images/arrow_right_small.png")}
            />
          </ArrowButton>
        </WalletRoute>
        <CardPatternBottom
          source={require("../../assets/images/card_bottom_pattern.png")}
        />
      </TotalBalanceCard>
    </TotalBalanceContainer>
  );
};
