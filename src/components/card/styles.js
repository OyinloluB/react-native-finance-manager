import { Pressable, FlatList } from 'react-native';
import styled from 'styled-components/native';

// Total Balance Card

export const TotalBalanceContainer = styled.View`
  padding: 20px 25px 0;
`;

export const TotalBalanceCard = styled.View`
  width: 100%;
  background: #242424;
  height: 150px;
  border-radius: 10;
  padding: 20px 30px;
  position: relative;
`;

export const CardPatternTop = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  border-top-right-radius: 10;
  overflow: hidden;
`;

export const CardPatternBottom = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  border-bottom-left-radius: 10;
  overflow: hidden;
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

export const CardPatternTopSmall = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  border-top-left-radius: 10;
  overflow: hidden;
`;

export const CardPatternBottomSmall = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
  border-bottom-right-radius: 10;
  overflow: hidden;
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

// Earnings Card

export const EarningsContainer = styled.View`
  padding: 25px 25px 0;
`;

export const Header = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const SectionName = styled.Text`
  font-size: 20px;
  font-family: RogerexSemiBold;
  line-height: 26px;
  color: #242424;
`;

export const SectionPrompt = styled.Text`
  font-size: 14px;
  font-family: Inter_700Bold;
  line-height: 20px;
  color: #489fcd;
`;

export const Earning = styled.View`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => props?.background};
  padding: 15px;
  border-radius: 10;
  width: 120px;
  height: 130px;
  margin-right: 15px;
`;

export const Icon = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 100;
  background-color: rgba(255, 255, 255, 0.75);
`;

export const IconText = styled.Text`
  font-family: Inter_700Bold;
  line-height: 22px;
  font-size: 16px;
  color: #242424;
`;

export const EarningName = styled.Text`
  font-family: Inter_400Regular;
  line-height: 18px;
  font-size: 12px;
  color: #242424;
  text-align: center;
`;

export const EarningAmount = styled.Text`
  font-family: Inter_600SemiBold;
  line-height: 24px;
  font-size: 18px;
  color: #242424;
  text-align: center;
`;
