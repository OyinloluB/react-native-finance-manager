import { Pressable } from "react-native";
import { SvgXml } from "react-native-svg";
import styled from "styled-components/native";

// Total Balance Card

export const TotalBalanceContainer = styled.View`
  padding: 30px 25px 0;
`;

export const TotalBalanceCard = styled.View`
  width: 100%;
  background: #242424;
  height: 150px;
  border-radius: 10;
  padding: 20px 30px;
  position: relative;
`;

export const CardPatternTop = styled(SvgXml)`
  position: absolute;
  top: 0;
  right: 0;
  border-top-right-radius: 10;
`;

export const CardPatternBottom = styled(SvgXml)`
  position: absolute;
  bottom: 0;
  left: 0;
  border-bottom-left-radius: 10;
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

// Expenses Card

export const ExpensesCardContainer = styled.View`
  padding: 20px 25px 0;
`;

export const ExpensesCard = styled.View`
  width: 100%;
  background: #242424;
  height: 70px;
  border-radius: 10;
  padding: 20px 30px;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardPatternTopSmall = styled(SvgXml)`
  position: absolute;
  top: 0;
  left: 0;
  border-top-left-radius: 10;
`;

export const CardPatternBottomSmall = styled(SvgXml)`
  position: absolute;
  bottom: 0;
  right: 0;
  border-bottom-right-radius: 10;
`;

export const Expense = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const ExpenseDetails = styled.View`
  padding-left: 15px;
`;

export const ExpenseType = styled.Text`
  font-family: Inter_400Regular;
  color: #ffffff;
  font-size: 12px;
  line-height: 18px;
`;

export const ExpenseAmount = styled.Text`
  font-family: Inter_600SemiBold;
  color: #ffffff;
  font-size: 18px;
  line-height: 24px;
`;

export const Divider = styled.View`
  width: 1px;
  background: #cfcfcf;
  height: 100%;
`;
