import React from 'react';
import { Image } from 'react-native';
import { SvgXml } from 'react-native-svg';
import {
  ExpensesCardContainer,
  ExpensesCard,
  Expense,
  ExpenseDetails,
  ExpenseType,
  ExpenseAmount,
  CardPatternTopSmall,
  CardPatternBottomSmall,
  Divider,
} from './styles';
import cardTopPatternSmall from '../../assets/images/card_top_pattern_small';
import cardBottomPatternSmall from '../../assets/images/card_bottom_pattern_small';
import incomeArrow from '../../assets/images/income_arrow';
import outcomeArrow from '../../assets/images/outcome_arrow';

export const Expenses = () => {
  return (
    <ExpensesCardContainer>
      <ExpensesCard>
        <CardPatternTopSmall>
          <SvgXml xml={cardTopPatternSmall} />
        </CardPatternTopSmall>
        <Expense>
          <SvgXml xml={incomeArrow} />
          <ExpenseDetails>
            <ExpenseType>Income</ExpenseType>
            <ExpenseAmount>$ 20,000</ExpenseAmount>
          </ExpenseDetails>
        </Expense>
        <Divider />
        <Expense>
          <SvgXml xml={outcomeArrow} />
          <ExpenseDetails>
            <ExpenseType>Outcome</ExpenseType>
            <ExpenseAmount>$ 17,000</ExpenseAmount>
          </ExpenseDetails>
        </Expense>
        <CardPatternBottomSmall>
          <SvgXml xml={cardBottomPatternSmall} />
        </CardPatternBottomSmall>
      </ExpensesCard>
    </ExpensesCardContainer>
  );
};
