import { Pressable } from "react-native";
import styled from "styled-components/native";

// Total Balance Card

export const TotalBalanceContainer = styled.View`
  padding: 30px 25px 0;
`;

export const TotalBalanceCard = styled.View`
  width: 100%;
  background: #242424;
  height: 150px;
  border-radius: 10px;
  padding: 20px;
  position: relative;
`;

export const CardPatternTop = styled.Image`
  position: absolute;
  top: 0;
  right: 0;
  border-top-right-radius: 10px;
`;

export const CardPatternBottom = styled.Image`
  position: absolute;
  bottom: 0;
  left: 0;
  border-bottom-left-radius: 10px;
`;

export const BalanceTitle = styled.Text`
  font-family: Inter_400Regular;
  color: #ffffff;
  font-size: 16px;
  line-height: 20px;
`;

export const TotalBalance = styled.Text`
  font-family: RogerexSemiBold;
  color: #ffffff;
  font-size: 32px;
  line-height: 40px;
`;

export const WalletRoute = styled.View`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  margin-top: 15px;
`;

export const WalletRouteText = styled.Text`
  font-family: Inter_400Regular;
  color: #ffffff;
  font-size: 12px;
  line-height: 18px;
  padding-right: 10px;
`;

export const ArrowButton = styled(Pressable)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100;
  background-color: white;
  width: 32px;
  height: 32px;
`;

// Income/Outcome Card

