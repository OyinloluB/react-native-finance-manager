import { Pressable } from 'react-native';
import styled from 'styled-components/native';

// Total Balance Card

export const TotalBalanceContainer = styled.View`
  padding: 20px 25px 0;
`;

export const TotalBalanceCard = styled.View`
  width: 100%;
  background: #242424;
  height: 150px;
  border-radius: 10px;
  padding: 20px 30px;
  position: relative;
`;

export const CardPatternTop = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  border-top-right-radius: 10px;
  overflow: hidden;
`;

export const CardPatternBottom = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  border-bottom-left-radius: 10px;
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
  border-radius: 100px;
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
  border-radius: 10px;
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
  border-top-left-radius: 10px;
  overflow: hidden;
`;

export const CardPatternBottomSmall = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
  border-bottom-right-radius: 10px;
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
  margin-bottom: 12px;
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
  background-color: ${(props) => props?.background};
  padding: 15px;
  border-radius: 10px;
  width: 120px;
  height: 125px;
  margin-right: 15px;
`;

export const Icon = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 100px;
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

// Savings Card

export const SavingsContainer = styled.View`
  padding: 25px 25px 0;
`;

export const SavingsItem = styled.View`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px 15px 15px;
  width: 170px;
  height: 90px;
  flex: 1;
  margin: 5px;
`;

export const SavingsTextContent = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const SavingsName = styled.Text`
  font-family: Inter_400Regular;
  line-height: 18px;
  font-size: 12px;
  color: #707070;
`;

export const SavingsAmount = styled.Text`
  font-family: Inter_600SemiBold;
  line-height: 22px;
  font-size: 16px;
  color: #242424;
`;

export const SavingsProgressBar = styled.View`
  position: relative;
  width: 100%;
  height: 7px;
  background-color: ${(props) => props?.background};
  border-radius: 10px;
`;

export const SavingsProgressBarAfter = styled.View`
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  background-color: ${(props) => props?.progressBarColor};
  border-radius: 10px;
`;

export const SavingsWrapper = styled.View`
  margin-left: -5px;
  margin-right: -5px;
`;

// Transactions Card
export const TransactionsContainer = styled.View`
  padding: 25px 25px 15px;
`;

export const SubHeader = styled.Text`
  font-family: Inter_400Regular;
  font-size: 16px;
  line-height: 22px;
  color: #707070;
  margin: 5px 0px;
`;

export const TransactionsWrapper = styled.View`
  margin-top: 10px;
`;

export const Transaction = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  background: #ffffff;
  border-radius: 8px;
  padding: 15px 10px;
  margin-bottom: 13px;
`;

export const TransactionContentWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  wdith: 50%;
`;

export const TransactionContent = styled.View`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 12px;
`;

export const TransactionName = styled.Text`
  font-family: Inter_600SemiBold;
  font-size: 16px;
  line-height: 22px;
  color: #242424;
`;

export const TransactionPurpose = styled.Text`
  font-family: Inter_400Regular;
  font-size: 14px;
  line-height: 20px;
  color: #707070;
`;

export const TransactionAmount = styled.Text`
  font-family: Inter_600SemiBold;
  font-size: 16px;
  line-height: 22px;
  color: ${(props) => (props?.isNegative ? '#e25c5c' : '#53D258')};
`;

// Credit Card
export const CardsContainer = styled.View`
  padding: 25px 25px 15px;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const AddCard = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dashed #242424;
  border-radius: 10px;
  padding: 0px 5px;
  background: #ffffff;
  margin-right: 15px;
`;

export const Card = styled.View`
  display: flex;
  align-items: flex-start;
  background: ${(props) => props?.background};
  border-radius: 10px;
  width: 290px;
  margin-right: 15px;
  flex: 1;
`;

export const CardTopWrapper = styled.View`
  width: 100%;
  padding: 20px 10px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CardTopContent = styled.View``;

export const TitleText = styled.Text`
  font-family: Inter_400Regular;
  font-size: 12px;
  line-height: 18px;
`;

export const CardBalance = styled.Text`
  font-family: Inter_600SemiBold;
  font-size: 18px;
  line-height: 23px;
`;

export const CardMidSection = styled.View`
  margin: 25px 0 20px;
  padding: 0px 10px;
  display: flex;
  flex-direction: row;
`;

export const CardNumber = styled.Text`
  font-family: Inter_400Regular;
  font-size: 12px;
  line-height: 18px;
  margin-right: 15px;
`;

export const CardBottom = styled.View`
  background: #242424;
  width: 100%;
  padding: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const UserDataTitle = styled.Text`
  font-family: Inter_400Regular;
  font-size: 10px;
  line-height: 16px;
  color: #cfcfcf;
`;

export const CardExp = styled.Text`
  font-family: Inter_400Regular;
  font-size: 10px;
  line-height: 16px;
  color: #cfcfcf;
  align-self: flex-end;
`;

export const UserDataValue = styled.Text`
  font-family: Inter_600SemiBold;
  font-size: 12px;
  line-height: 18px;
  color: #ffffff;
`;
