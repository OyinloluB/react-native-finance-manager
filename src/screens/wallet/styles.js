import { SafeAreaView, StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const SafeArea = styled(SafeAreaView)`
  display: flex;
  height: 100%;
  ${StatusBar.currentHeight &&
  `margin-top: ${StatusBar.currentHeight}px`};
  flex: 1;
`;

export const GreetingsContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 25px 25px 0;
  width: 100%;
`;

export const ProfileDetails = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const ProfilePicture = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  background-color: #c4c4c4;
`;

export const ScreenGreeting = styled.View``;

export const Greeting = styled.Text`
  font-family: RogerexSemiBold;
  color: #242424;
  font-size: 18px;
  line-height: 24px;
`;

export const Header = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;

export const SavingsSection = styled.View`
  padding: 15px 25px 10px;
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

export const Saving = styled.View`
  display: flex;
  flex-direction: row;
  background: #ffffff;
  padding: 15px 10px;
  border-radius: 8px;
  margin-bottom: 12px;

`;

export const SavingContentWrapper = styled.View`
  margin-left: 12px;
  flex: 1;
`;

export const SavingContent = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SavingText = styled.Text`
  font-family: Inter_600SemiBold;
  font-size: 16px;
  line-height: 22px;
  color: #242424;
  margin-bottom: 10px;
`;

export const SavingsProgressBar = styled.View`
  position: relative;
  width: 100%;
  height: 4px;
  background-color: #f3f3f3;
  border-radius: 10px;
`;

export const SavingsProgressBarAfter = styled.View`
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  background-color: #403bd7;
  border-radius: 10px;
`;
